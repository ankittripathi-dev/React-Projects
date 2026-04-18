export interface SensorData {
  soilMoisture: number;
  temperature: number;
  humidity: number;
  timestamp: string;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainProbability: number;
  description: string;
  city: string;
}

export interface IrrigationRecommendation {
  shouldIrrigate: boolean;
  reason: string;
  irrigationStatus: 'ON' | 'OFF';
  confidence: number;
}

export interface ForecastPoint {
  time: number; // epoch ms
  temp: number; // Celsius
  rain: number; // % probability or clouds proxy
  desc: string;
}

export interface WeatherForecast {
  city: string;
  points: ForecastPoint[];
}
