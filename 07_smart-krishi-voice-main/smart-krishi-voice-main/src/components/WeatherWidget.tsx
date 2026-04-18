import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Droplets } from "lucide-react";
import { WeatherData } from "@/types/sensor";

interface LocationDetails {
  source: 'geolocation' | 'city';
  permission?: 'granted' | 'denied' | 'prompt' | 'unknown';
  lat?: number;
  lon?: number;
  accuracyM?: number;
  lastUpdated?: string;
  city?: string;
}

interface WeatherWidgetProps {
  weather: WeatherData | null;
  location?: LocationDetails;
  onUseMyLocation?: () => void;
}

const WeatherWidget = ({ weather, location, onUseMyLocation }: WeatherWidgetProps) => {
  if (!weather) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading weather data...</p>
        </CardContent>
      </Card>
    );
  }

  const getWeatherIcon = () => {
    if (weather.rainProbability > 50) return <CloudRain className="h-12 w-12 text-secondary" />;
    if (weather.temperature > 30) return <Sun className="h-12 w-12 text-accent" />;
    return <Cloud className="h-12 w-12 text-primary" />;
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-card to-muted">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <Cloud className="h-5 w-5" />
          <span>Weather - {weather.city}</span>
          {onUseMyLocation && location?.source !== 'geolocation' && (
            <button
              className="ml-auto text-xs px-2 py-1 rounded bg-primary text-primary-foreground"
              onClick={onUseMyLocation}
            >
              Use current location
            </button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">{weather.temperature}°C</p>
            <p className="text-muted-foreground capitalize">{weather.description}</p>
          </div>
          {getWeatherIcon()}
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CloudRain className="h-4 w-4 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Rain Chance</p>
              <p className="text-lg font-semibold">{weather.rainProbability}%</p>
            </div>
          </div>
        </div>

        {location && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t text-sm text-muted-foreground">
            <div>
              <div className="font-medium text-foreground">Source</div>
              <div className="capitalize">{location.source}</div>
            </div>
            <div>
              <div className="font-medium text-foreground">Permission</div>
              <div className="capitalize">{location.permission ?? 'unknown'}</div>
            </div>
            {location.source === 'geolocation' ? (
              <>
                <div>
                  <div className="font-medium text-foreground">Coordinates</div>
                  <div>{location.lat?.toFixed(4)}, {location.lon?.toFixed(4)}</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Accuracy</div>
                  <div>{location.accuracyM ? `${Math.round(location.accuracyM)} m` : '—'}</div>
                </div>
              </>
            ) : (
              <div>
                <div className="font-medium text-foreground">City</div>
                <div>{location.city}</div>
              </div>
            )}
            <div>
              <div className="font-medium text-foreground">Last updated</div>
              <div>{location.lastUpdated || '—'}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
