import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Power } from "lucide-react";
import { IrrigationRecommendation } from "@/types/sensor";

interface RecommendationPanelProps {
  recommendation: IrrigationRecommendation | null;
  lastIrrigation: string;
}

const RecommendationPanel = ({ recommendation, lastIrrigation }: RecommendationPanelProps) => {
  if (!recommendation) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5" />
            Irrigation Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Analyzing conditions...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Sprout className="h-5 w-5" />
            Irrigation System
          </span>
          <Badge 
            variant={recommendation.irrigationStatus === 'ON' ? 'default' : 'secondary'}
            className={recommendation.irrigationStatus === 'ON' ? 'bg-primary' : ''}
          >
            <Power className="h-3 w-3 mr-1" />
            {recommendation.irrigationStatus}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Recommendation</span>
            <Badge variant={recommendation.shouldIrrigate ? 'destructive' : 'default'}>
              {recommendation.shouldIrrigate ? 'Irrigate Now' : 'No Action Needed'}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{recommendation.reason}</p>
        </div>

        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Confidence</span>
            <span className="text-sm font-semibold">{recommendation.confidence}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${recommendation.confidence}%` }}
            />
          </div>
        </div>

        <div className="pt-2 text-xs text-muted-foreground">
          Last irrigation: {lastIrrigation}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationPanel;
