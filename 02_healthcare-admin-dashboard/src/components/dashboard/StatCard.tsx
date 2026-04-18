import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  colorClass: string;
  delay?: number;
}

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendUp, 
  colorClass,
  delay = 0 
}: StatCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value.toLocaleString()}</p>
          {trend && (
            <p className={cn(
              "text-xs font-medium",
              trendUp ? "text-healthcare-success" : "text-destructive"
            )}>
              {trendUp ? '↑' : '↓'} {trend} from last month
            </p>
          )}
        </div>
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          colorClass
        )}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className={cn(
        "absolute bottom-0 left-0 h-1 w-full opacity-60",
        colorClass
      )} />
    </div>
  );
};

export default StatCard;
