// features/alerts/store/alerts.slice.ts

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Example state shape
export interface AlertState {
  activeAlerts: Record<string, any> | Array<any>; // Adjust to your actual active alerts type
  // ... other alert state properties
}

// Selectors
export const selectActiveAlerts = (state: RootState) => state.alerts.pending;

// Memoized selector checking if any active alerts exist
export const selectHasActiveAlerts = createSelector([selectActiveAlerts], (activeAlerts) => {
  if (Array.isArray(activeAlerts)) {
    return activeAlerts.length > 0;
  }
  if (activeAlerts && typeof activeAlerts === 'object') {
    return Object.keys(activeAlerts).length > 0;
  }
  return false;
});
