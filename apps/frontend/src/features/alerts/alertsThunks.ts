import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAlerts } from './alertsApi';

export const loadAlerts = createAsyncThunk('alerts/load', async () => {
  return await fetchAlerts();
});
