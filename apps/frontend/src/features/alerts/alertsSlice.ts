import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Alert } from './types';

const STORAGE_KEY = 'pending_alerts';

// Single source helper: Read directly from localStorage
const getPendingFromStorage = (): Alert[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to read pending alerts:', error);
    return [];
  }
};

// Single source helper: Write directly to localStorage
const setPendingInStorage = (pending: Alert[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pending));
  } catch (error) {
    console.error('Failed to write pending alerts:', error);
  }
};

interface AlertsState {
  items: Alert[];
  pending: Alert[];
}

const initialState: AlertsState = {
  items: [],
  get pending() {
    return getPendingFromStorage();
  },
};

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert(state, action: PayloadAction<Alert>) {
      state.items.unshift(action.payload);

      const currentPending = getPendingFromStorage();
      setPendingInStorage([action.payload, ...currentPending]);
      
      state.pending = getPendingFromStorage();
    },

    confirmAlert(state, action: PayloadAction<string>) {
      const currentPending = getPendingFromStorage();
      const updatedPending = currentPending.filter((alert) => alert.id !== action.payload);
      setPendingInStorage(updatedPending);

      state.pending = updatedPending;
    },

    setAlerts(state, action: PayloadAction<Alert[]>) {
      state.items = action.payload;
    },

    clearAlerts(state) {
      state.items = [];
    },
  },
});

export const { addAlert, confirmAlert, setAlerts, clearAlerts } = alertsSlice.actions;

export default alertsSlice.reducer;