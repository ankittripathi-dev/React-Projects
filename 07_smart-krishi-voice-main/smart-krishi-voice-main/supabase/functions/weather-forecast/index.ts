import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { city = 'Mumbai', lat, lon } = body ?? {};
    const apiKey = Deno.env.get('OPENWEATHER_API_KEY');

    if (!apiKey) {
      throw new Error('OpenWeather API key not configured');
    }

    // Use OpenWeather 5-day/3-hour forecast
    let url: string;
    if (typeof lat === 'number' && typeof lon === 'number') {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    }

    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Forecast API error: ${resp.statusText}`);
    }

    const data = await resp.json();

    // Map to a compact structure: timestamp, temperature, rain probability (clouds % as proxy)
    const points = (data.list || []).map((entry: any) => ({
      time: entry.dt * 1000,
      temp: Math.round(entry.main?.temp ?? 0),
      rain: typeof entry.pop === 'number'
        ? Math.round(entry.pop * 100)
        : (entry.clouds?.all ?? 0),
      desc: entry.weather?.[0]?.description ?? 'clear',
    }));

    return new Response(
      JSON.stringify({ city: data.city?.name ?? city, points }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in weather-forecast function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});


