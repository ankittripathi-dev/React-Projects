import { useEffect } from 'react';
import { Users, Stethoscope, Calendar, Building2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setStats, setRecentPatients, setRecentDoctors, setLoading } from '@/store/dashboardSlice';
import Header from '@/components/dashboard/Header';
import StatCard from '@/components/dashboard/StatCard';
import PatientsTable from '@/components/dashboard/PatientsTable';
import DoctorsTable from '@/components/dashboard/DoctorsTable';
import dummyData from '@/data/dummyData.json';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { stats, isLoading } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    const loadData = async () => {
      dispatch(setLoading(true));
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(setStats(dummyData.dashboard));
      dispatch(setRecentPatients(dummyData.recentPatients));
      dispatch(setRecentDoctors(dummyData.recentDoctors));
      dispatch(setLoading(false));
    };

    loadData();
  }, [dispatch]);

  const statCards = [
    {
      title: 'Total Patients',
      value: stats.patients,
      icon: Users,
      trend: '12%',
      trendUp: true,
      colorClass: 'bg-healthcare-teal',
    },
    {
      title: 'Total Doctors',
      value: stats.doctors,
      icon: Stethoscope,
      trend: '5%',
      trendUp: true,
      colorClass: 'bg-healthcare-info',
    },
    {
      title: 'Total Appointments',
      value: stats.appointments,
      icon: Calendar,
      trend: '8%',
      trendUp: true,
      colorClass: 'bg-healthcare-warning',
    },
    {
      title: 'Active Clinics',
      value: stats.clinics,
      icon: Building2,
      trend: '2%',
      trendUp: false,
      colorClass: 'bg-healthcare-success',
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {statCards.map((card, index) => (
            <StatCard
              key={card.title}
              {...card}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Tables Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <PatientsTable />
          <DoctorsTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
