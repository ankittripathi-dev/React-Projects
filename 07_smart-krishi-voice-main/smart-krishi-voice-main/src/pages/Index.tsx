import { useState, useEffect } from "react";
import { Leaf, Droplets, MapPin, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/Dashboard";
import WeatherWidget from "@/components/WeatherWidget";
import RecommendationPanel from "@/components/RecommendationPanel";
import ForecastChart from "@/components/ForecastChart";
import FarmerChat from "@/components/FarmerChat";
import Charts from "@/components/Charts";
import { SensorData, WeatherData, IrrigationRecommendation, WeatherForecast } from "@/types/sensor";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [sensorData, setSensorData] = useState<SensorData>({
    soilMoisture: 45,
    temperature: 28,
    humidity: 65,
    timestamp: new Date().toISOString()
  });
  const [sensorHistory, setSensorHistory] = useState<SensorData[]>([]);
  const [manualSoilMoisture, setManualSoilMoisture] = useState<number | null>(null);
  const [useGeolocation, setUseGeolocation] = useState<boolean>(true);
  const [cityInput, setCityInput] = useState<string>('Mumbai');
  const [locationInfo, setLocationInfo] = useState<{
    source: 'geolocation' | 'city';
    permission?: 'granted' | 'denied' | 'prompt' | 'unknown';
    lat?: number;
    lon?: number;
    accuracyM?: number;
    lastUpdated?: string;
    city?: string;
  }>({ source: 'city', permission: 'unknown', city: 'Mumbai' });
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [recommendation, setRecommendation] = useState<IrrigationRecommendation | null>(null);
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [lastIrrigation, setLastIrrigation] = useState<string>(
    new Date(Date.now() - 3600000).toLocaleString()
  );
  const { toast } = useToast();
  const OPENWEATHER_KEY = (import.meta as any).env?.VITE_OPENWEATHER_API_KEY as string | undefined;

  const resolveCityName = async (lat: number, lon: number): Promise<string | undefined> => {
    try {
      if (!OPENWEATHER_KEY) return undefined;
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${OPENWEATHER_KEY}`;
      const resp = await fetch(url);
      if (!resp.ok) return undefined;
      const data = await resp.json();
      const name = data?.[0]?.name as string | undefined;
      return name;
    } catch {
      return undefined;
    }
  };

  const requestGeolocation = () => {
    if (typeof window === 'undefined' || !('geolocation' in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const resolvedCity = await resolveCityName(latitude, longitude);
        setLocationInfo({
          source: 'geolocation',
          permission: 'granted',
          lat: latitude,
          lon: longitude,
          accuracyM: pos.coords.accuracy,
          lastUpdated: new Date().toLocaleString(),
          city: resolvedCity,
        });
        await fetchWeather(resolvedCity || 'Current Location', { lat: latitude, lon: longitude });
        // Ensure displayed title uses resolved city if available
        if (resolvedCity) {
          setWeather((prev) => prev ? { ...prev, city: resolvedCity } as WeatherData : prev);
        }
        fetchForecast('Current Location', { lat: latitude, lon: longitude });
      },
      () => {
        setLocationInfo({
          source: 'city',
          permission: 'denied',
          city: cityInput || 'Mumbai',
          lastUpdated: new Date().toLocaleString(),
        });
        fetchWeather(cityInput || 'Mumbai');
        fetchForecast(cityInput || 'Mumbai');
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
    );
  };

  // Fetch sensor data
  const fetchSensorData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('sensor-data');
      if (error) throw error;
      
      setSensorData(data);
      setSensorHistory(prev => [...prev.slice(-19), data]);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  // Fetch weather data by city or coordinates
  const fetchWeather = async (city: string = 'Mumbai', coords?: { lat: number; lon: number }) => {
    try {
      const payload = coords ? { lat: coords.lat, lon: coords.lon } : { city };
      const { data, error } = await supabase.functions.invoke('weather', { body: payload });
      if (error) throw error;
      
      setWeather(data);
    } catch (error) {
      console.warn('Weather edge function failed, attempting frontend fallback...', error);
      // Frontend fallback using OpenWeather if key provided
      if (!OPENWEATHER_KEY) {
        toast({ title: "Weather Error", description: "Backend not configured. Add VITE_OPENWEATHER_API_KEY for fallback.", variant: "destructive" });
        return;
      }
      try {
        let url: string;
        if (coords) {
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_KEY}&units=metric`;
        } else {
          url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_KEY}&units=metric`;
        }
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('OpenWeather current failed');
        const data = await resp.json();
        const mapped: WeatherData = {
          temperature: Math.round(data.main.temp),
          humidity: data.main.humidity,
          rainProbability: data.clouds?.all || 0,
          description: data.weather?.[0]?.description || 'clear',
          city: data.name || city || 'Current Location',
        };
        setWeather(mapped);
      } catch (e) {
        console.error('Weather fallback failed:', e);
        toast({ title: "Weather Error", description: "Could not fetch weather data", variant: "destructive" });
      }
    }
  };

  // Fetch irrigation recommendation; if manual soil moisture provided, pass it through
  const fetchRecommendation = async (city: string = 'Mumbai', crop: string = 'wheat') => {
    try {
      const body: Record<string, unknown> = { city, crop };
      if (manualSoilMoisture !== null) {
        body.soilMoisture = manualSoilMoisture;
      }
      const { data, error } = await supabase.functions.invoke('recommendation', { body });
      if (error) throw error;
      
      setRecommendation(data);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  // Fetch weather forecast (5-day/3-hour)
  const fetchForecast = async (city: string = 'Mumbai', coords?: { lat: number; lon: number }) => {
    try {
      const payload = coords ? { lat: coords.lat, lon: coords.lon } : { city };
      const { data, error } = await supabase.functions.invoke('weather-forecast', { body: payload });
      if (error) throw error;
      setForecast(data);
    } catch (error) {
      console.warn('Forecast edge function failed, attempting frontend fallback...', error);
      if (!OPENWEATHER_KEY) {
        return; // silent; chart will show loading
      }
      try {
        let url: string;
        if (coords) {
          url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_KEY}&units=metric`;
        } else {
          url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_KEY}&units=metric`;
        }
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('OpenWeather forecast failed');
        const data = await resp.json();
        const points = (data.list || []).map((entry: any) => ({
          time: entry.dt * 1000,
          temp: Math.round(entry.main?.temp ?? 0),
          rain: typeof entry.pop === 'number' ? Math.round(entry.pop * 100) : (entry.clouds?.all ?? 0),
          desc: entry.weather?.[0]?.description ?? 'clear',
        }));
        setForecast({ city: data.city?.name ?? city, points });
      } catch (e) {
        console.error('Forecast fallback failed:', e);
      }
    }
  };

  useEffect(() => {
    // Initial data fetch
    fetchSensorData();
    // If permission already granted, fetch immediately
    if (typeof navigator !== 'undefined' && (navigator as any).permissions?.query) {
      try {
        (navigator as any).permissions.query({ name: 'geolocation' as any }).then((p: any) => {
          if (p.state === 'granted' && useGeolocation) {
            requestGeolocation();
          }
          // Always keep forecast using geolocation if granted, regardless of toggle
          if (p.state === 'granted') {
            navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
              const { latitude, longitude } = pos.coords;
              fetchForecast('Current Location', { lat: latitude, lon: longitude });
            });
          }
        });
      } catch {}
    }

    // Weather bootstrap respects preference; Forecast always tries geolocation first
    if (useGeolocation && typeof window !== 'undefined' && 'geolocation' in navigator) {
      requestGeolocation();
    } else {
      setLocationInfo({
        source: 'city',
        permission: 'unknown',
        city: cityInput || 'Mumbai',
        lastUpdated: new Date().toLocaleString(),
      });
      fetchWeather(cityInput || 'Mumbai');
      // Forecast: try geolocation independent of toggle
      if (typeof window !== 'undefined' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            const resolvedCity = await resolveCityName(latitude, longitude);
            if (resolvedCity) {
              setForecast((prev) => prev ? { ...prev, city: resolvedCity } : prev);
            }
            fetchForecast('Current Location', { lat: latitude, lon: longitude });
          },
          () => { fetchForecast(cityInput || 'Mumbai'); },
          { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
        );
      } else {
        fetchForecast(cityInput || 'Mumbai');
      }
    }
    fetchRecommendation();

    // Set up intervals for real-time updates
    const sensorInterval = setInterval(fetchSensorData, 60000); // Every 1 minute
    const weatherInterval = setInterval(() => {
      if (useGeolocation && typeof window !== 'undefined' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            fetchWeather('Current Location', { lat: latitude, lon: longitude });
          },
          () => { fetchWeather(cityInput || 'Mumbai'); },
          { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
        );
      } else {
        fetchWeather(cityInput || 'Mumbai');
      }
      // Forecast refresh always tries geolocation
      if (typeof window !== 'undefined' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            fetchForecast('Current Location', { lat: latitude, lon: longitude });
          },
          () => { fetchForecast(cityInput || 'Mumbai'); },
          { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
        );
      } else {
        fetchForecast(cityInput || 'Mumbai');
      }
    }, 300000); // Every 5 minutes
    const recommendationInterval = setInterval(() => fetchRecommendation(), 60000); // Every 1 minute

    return () => {
      clearInterval(sensorInterval);
      clearInterval(weatherInterval);
      clearInterval(recommendationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">KrishiMitra</h1>
                <p className="text-sm opacity-90">Smart Irrigation Dashboard</p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="gap-2"
              onClick={() => {
                const el = document.getElementById('ai-assistant');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              title="Ask AI Assistant"
            >
              <MessageSquare className="h-4 w-4" />
              Ask AI
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Location Preference */}
        <section className="p-4 border rounded-lg bg-muted/30">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <Label htmlFor="useGeo">Use my location</Label>
              <Switch id="useGeo" checked={useGeolocation} onCheckedChange={(v) => {
                setUseGeolocation(v);
                if (v) {
                  if (typeof window !== 'undefined' && 'geolocation' in navigator) {
                    requestGeolocation();
                  }
                }
              }} />
              <button
                className="ml-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
                onClick={() => requestGeolocation()}
              >
                Use current location now
              </button>
            </div>
            {!useGeolocation && (
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city (e.g., Pune)" value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
                </div>
                <div className="md:col-span-1">
                  <Label className="invisible">Fetch</Label>
                  <button
                    className="w-full h-10 px-3 rounded-md bg-primary text-primary-foreground"
                    onClick={() => { 
                      setLocationInfo({
                        source: 'city',
                        permission: 'unknown',
                        city: cityInput || 'Mumbai',
                        lastUpdated: new Date().toLocaleString(),
                      });
                      fetchWeather(cityInput || 'Mumbai'); fetchForecast(cityInput || 'Mumbai');
                    }}
                  >
                    Update Weather
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Real-time Sensor Data */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="h-2 w-2 bg-status-healthy rounded-full animate-pulse"></span>
            Live Sensor Data
          </h2>
          <Dashboard sensorData={sensorData} />
          {/* Manual Soil Moisture Control when hardware is unavailable */}
          <div className="mt-6 p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="h-4 w-4" />
              <span className="font-medium">Set Soil Moisture (no hardware)</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={100}
                value={manualSoilMoisture ?? sensorData.soilMoisture}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setManualSoilMoisture(value);
                  // Reflect immediately in the displayed sensor data
                  setSensorData((prev) => ({ ...prev, soilMoisture: value, timestamp: new Date().toISOString() }));
                }}
                className="w-full"
              />
              <span className="w-16 text-right tabular-nums">{(manualSoilMoisture ?? sensorData.soilMoisture)}%</span>
              <button
                className="px-3 py-2 rounded-md bg-primary text-primary-foreground"
                onClick={() => {
                  // Trigger new recommendation based on manual value
                  fetchRecommendation();
                }}
              >
                Update Advice
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Use this while sensors are not connected.</p>
          </div>
        </section>

        {/* Weather and Recommendation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeatherWidget 
            weather={weather} 
            location={locationInfo}
            onUseMyLocation={() => {
              setUseGeolocation(true);
              requestGeolocation();
            }}
          />
          <RecommendationPanel 
            recommendation={recommendation} 
            lastIrrigation={lastIrrigation}
          />
        </section>

        {/* Trends */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sensor Trends</h2>
          <Charts history={sensorHistory} />
        </section>

        {/* Weather Forecast */}
        <section>
          <h2 className="text-2xl font-bold mb-4">5-Day Weather Forecast</h2>
          <ForecastChart forecast={forecast} />
        </section>

        {/* AI Chat Assistant */}
        <section id="ai-assistant">
          <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
          <FarmerChat />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>KrishiMitra - Empowering Farmers with AI & IoT</p>
          <p className="text-sm mt-2">Real-time monitoring • Smart recommendations • Multilingual support</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
