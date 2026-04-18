import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardStats {
  patients: number;
  doctors: number;
  appointments: number;
  clinics: number;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
  status: string;
  lastVisit: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  patients: number;
  status: string;
}

interface DashboardState {
  stats: DashboardStats;
  recentPatients: Patient[];
  recentDoctors: Doctor[];
  isLoading: boolean;
}

const initialState: DashboardState = {
  stats: {
    patients: 0,
    doctors: 0,
    appointments: 0,
    clinics: 0,
  },
  recentPatients: [],
  recentDoctors: [],
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setStats: (state, action: PayloadAction<DashboardStats>) => {
      state.stats = action.payload;
    },
    setRecentPatients: (state, action: PayloadAction<Patient[]>) => {
      state.recentPatients = action.payload;
    },
    setRecentDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.recentDoctors = action.payload;
    },
  },
});

export const { setLoading, setStats, setRecentPatients, setRecentDoctors } = dashboardSlice.actions;
export default dashboardSlice.reducer;
