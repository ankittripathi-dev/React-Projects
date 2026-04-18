import { useAppSelector } from '@/store/hooks';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const PatientsTable = () => {
  const { recentPatients } = useAppSelector((state) => state.dashboard);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20';
      case 'critical':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'stable':
        return 'bg-healthcare-info/10 text-healthcare-info border-healthcare-info/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="rounded-xl bg-card shadow-card overflow-hidden animate-slide-up" style={{ animationDelay: '300ms' }}>
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Recent Patients</h3>
        <p className="text-sm text-muted-foreground">Latest patient records and status</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Age</TableHead>
              <TableHead className="font-semibold">Condition</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Last Visit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPatients.map((patient) => (
              <TableRow key={patient.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell className="text-muted-foreground">{patient.age}</TableCell>
                <TableCell className="text-muted-foreground">{patient.condition}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn("font-medium", getStatusColor(patient.status))}
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{patient.lastVisit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PatientsTable;
