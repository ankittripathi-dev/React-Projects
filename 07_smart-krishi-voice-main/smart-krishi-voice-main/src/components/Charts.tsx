import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, TrendingUp } from "lucide-react";
import { SensorData } from "@/types/sensor";

interface ChartsProps {
  history: SensorData[];
}

const Charts = ({ history }: ChartsProps) => {
  const latestData = history[history.length - 1];
  const oldestData = history[0];

  const calculateTrend = (current: number, old: number) => {
    const diff = current - old;
    return {
      value: Math.abs(diff).toFixed(1),
      direction: diff > 0 ? 'up' : 'down',
      isPositive: diff > 0
    };
  };

  if (!latestData || !oldestData) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Collecting data...</p>
        </CardContent>
      </Card>
    );
  }

  const moistureTrend = calculateTrend(latestData.soilMoisture, oldestData.soilMoisture);
  const tempTrend = calculateTrend(latestData.temperature, oldestData.temperature);
  const humidityTrend = calculateTrend(latestData.humidity, oldestData.humidity);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5" />
          Sensor Trends
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Soil Moisture</span>
            <div className="flex items-center gap-1">
              <TrendingUp 
                className={`h-4 w-4 ${moistureTrend.direction === 'up' ? 'rotate-0' : 'rotate-180'} ${
                  moistureTrend.isPositive ? 'text-status-healthy' : 'text-status-alert'
                }`} 
              />
              <span className="text-sm">{moistureTrend.value}%</span>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-water h-2 rounded-full transition-all duration-500"
              style={{ width: `${latestData.soilMoisture}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Temperature</span>
            <div className="flex items-center gap-1">
              <TrendingUp 
                className={`h-4 w-4 ${tempTrend.direction === 'up' ? 'rotate-0' : 'rotate-180'} ${
                  tempTrend.isPositive ? 'text-status-warning' : 'text-status-healthy'
                }`} 
              />
              <span className="text-sm">{tempTrend.value}°C</span>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((latestData.temperature / 45) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Humidity</span>
            <div className="flex items-center gap-1">
              <TrendingUp 
                className={`h-4 w-4 ${humidityTrend.direction === 'up' ? 'rotate-0' : 'rotate-180'}`} 
              />
              <span className="text-sm">{humidityTrend.value}%</span>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${latestData.humidity}%` }}
            />
          </div>
        </div>

        <div className="pt-4 border-t text-xs text-muted-foreground">
          <p>Data points: {history.length}</p>
          <p>Last updated: {new Date(latestData.timestamp).toLocaleTimeString()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Charts;
