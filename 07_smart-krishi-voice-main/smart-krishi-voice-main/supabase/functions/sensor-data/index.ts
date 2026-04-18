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
    // Simulate realistic sensor data
    const sensorData = {
      soilMoisture: Math.floor(Math.random() * 50) + 20, // 20-70%
      temperature: Math.floor(Math.random() * 15) + 25, // 25-40°C
      humidity: Math.floor(Math.random() * 50) + 40, // 40-90%
      timestamp: new Date().toISOString()
    };

    console.log('Generated sensor data:', sensorData);

    return new Response(
      JSON.stringify(sensorData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in sensor-data function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
