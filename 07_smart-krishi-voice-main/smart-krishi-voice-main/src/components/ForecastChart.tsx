import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherForecast } from "@/types/sensor";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  CartesianGrid,
} from "recharts";

interface ForecastChartProps {
  forecast: WeatherForecast | null;
}

const ForecastChart = ({ forecast }: ForecastChartProps) => {
  if (!forecast) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>5-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Loading forecast...</p>
        </CardContent>
      </Card>
    );
  }

  const data = forecast.points.map((p) => ({
    time: new Date(p.time).toLocaleString(undefined, { hour: '2-digit', day: '2-digit', month: 'short' }),
    temp: p.temp,
    rain: p.rain,
  }));

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>5-Day Forecast - {forecast.city}</CardTitle>
      </CardHeader>
      <CardContent style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" minTickGap={32} />
            <YAxis yAxisId="left" domain={[0, 'auto']} label={{ value: '°C', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" domain={[0, 100]} label={{ value: '% Rain', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="right" dataKey="rain" name="Rain %" fill="#60a5fa" opacity={0.8} />
            <Line yAxisId="left" type="monotone" dataKey="temp" name="Temp °C" stroke="#f59e0b" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ForecastChart;


