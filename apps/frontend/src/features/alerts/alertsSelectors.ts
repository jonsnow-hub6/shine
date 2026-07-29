import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const selectActiveAlerts = (state: RootState) => state.alerts.pending;

export const selectHasActiveAlerts = createSelector([selectActiveAlerts], (activeAlerts) => {
  if (Array.isArray(activeAlerts)) {
    return activeAlerts.length > 0;
  }
  if (activeAlerts && typeof activeAlerts === 'object') {
    return Object.keys(activeAlerts).length > 0;
  }
  return false;
});
