import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Thermometer, Wind, Gauge } from "lucide-react";
import { SensorData } from "@/types/sensor";

interface DashboardProps {
  sensorData: SensorData;
}

const Dashboard = ({ sensorData }: DashboardProps) => {
  const getStatusColor = (value: number, type: 'moisture' | 'temp' | 'humidity') => {
    if (type === 'moisture') {
      if (value < 30) return "text-status-alert";
      if (value < 50) return "text-status-warning";
      return "text-status-healthy";
    }
    if (type === 'temp') {
      if (value > 35) return "text-status-alert";
      if (value > 30) return "text-status-warning";
      return "text-status-healthy";
    }
    return "text-status-healthy";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
          <Droplets className="h-5 w-5 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className={`text-3xl font-bold ${getStatusColor(sensorData.soilMoisture, 'moisture')}`}>
            {sensorData.soilMoisture}%
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {sensorData.soilMoisture < 30 ? "Critical - Irrigation needed" : 
             sensorData.soilMoisture < 50 ? "Low - Consider irrigation" : 
             "Optimal level"}
          </p>
          <div className="mt-3 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-water h-2 rounded-full transition-all duration-500"
              style={{ width: `${sensorData.soilMoisture}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          <Thermometer className="h-5 w-5 text-accent" />
        </CardHeader>
        <CardContent>
          <div className={`text-3xl font-bold ${getStatusColor(sensorData.temperature, 'temp')}`}>
            {sensorData.temperature}°C
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {sensorData.temperature > 35 ? "Very Hot" : 
             sensorData.temperature > 30 ? "Hot" : 
             "Normal"}
          </p>
          <div className="mt-3 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((sensorData.temperature / 45) * 100, 100)}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Humidity</CardTitle>
          <Wind className="h-5 w-5 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary">
            {sensorData.humidity}%
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {sensorData.humidity < 50 ? "Low humidity" : 
             sensorData.humidity < 70 ? "Normal humidity" : 
             "High humidity"}
          </p>
          <div className="mt-3 w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${sensorData.humidity}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
