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
    const { city = 'Mumbai', crop = 'wheat', soilMoisture, temperature, humidity } = body ?? {};
    
    console.log('Generating recommendation for:', { city, crop, soilMoisture, temperature, humidity });

    // Use provided sensor data if available; otherwise simulate reasonable defaults
    const sensorData = {
      soilMoisture: typeof soilMoisture === 'number' ? soilMoisture : Math.floor(Math.random() * 50) + 20,
      temperature: typeof temperature === 'number' ? temperature : Math.floor(Math.random() * 15) + 25,
      humidity: typeof humidity === 'number' ? humidity : Math.floor(Math.random() * 50) + 40
    };

    // Simple irrigation logic
    const shouldIrrigate = sensorData.soilMoisture < 40;
    const irrigationStatus = shouldIrrigate ? 'ON' : 'OFF';
    
    let reason = '';
    if (sensorData.soilMoisture < 30) {
      reason = `Critical: Soil moisture is very low (${sensorData.soilMoisture}%). Immediate irrigation recommended for ${crop} crop.`;
    } else if (sensorData.soilMoisture < 40) {
      reason = `Low moisture level (${sensorData.soilMoisture}%). Consider irrigation to maintain optimal ${crop} growth.`;
    } else {
      reason = `Soil moisture is adequate (${sensorData.soilMoisture}%). No immediate irrigation needed for ${crop}.`;
    }

    // Calculate confidence based on sensor readings
    const confidence = Math.min(
      95,
      70 + (sensorData.soilMoisture < 40 ? 20 : 0) + (sensorData.temperature > 32 ? 5 : 0)
    );

    const recommendation = {
      shouldIrrigate,
      reason,
      irrigationStatus,
      confidence
    };

    console.log('Recommendation:', recommendation);

    return new Response(
      JSON.stringify(recommendation),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in recommendation function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
