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

const DoctorsTable = () => {
  const { recentDoctors } = useAppSelector((state) => state.dashboard);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-healthcare-success/10 text-healthcare-success border-healthcare-success/20';
      case 'in consultation':
        return 'bg-healthcare-warning/10 text-healthcare-warning border-healthcare-warning/20';
      case 'on leave':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="rounded-xl bg-card shadow-card overflow-hidden animate-slide-up" style={{ animationDelay: '400ms' }}>
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Medical Staff</h3>
        <p className="text-sm text-muted-foreground">Active doctors and their availability</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Specialty</TableHead>
              <TableHead className="font-semibold">Patients</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDoctors.map((doctor) => (
              <TableRow key={doctor.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{doctor.name}</TableCell>
                <TableCell className="text-muted-foreground">{doctor.specialty}</TableCell>
                <TableCell className="text-muted-foreground">{doctor.patients}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn("font-medium", getStatusColor(doctor.status))}
                  >
                    {doctor.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DoctorsTable;
