import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Alert } from "./types";



interface AlertsState {
  items: Alert[];
  pending: Alert[];
}


const initialState: AlertsState = {
  items: [],
  pending: [],
};


const alertsSlice = createSlice({
  name: "alerts",

  initialState,

  reducers: {

    addAlert(
      state,
      action: PayloadAction<Alert>
    ) {
      state.items.unshift(action.payload);
      state.pending.unshift(action.payload);
    },


    confirmAlert(
      state,
      action: PayloadAction<string>
    ) {
      state.pending =
        state.pending.filter(
          alert =>
            alert.id !== action.payload
        );
    },
        setAlerts(state, action: PayloadAction<Alert[]>) {
      state.items = action.payload;
    },

    clearAlerts(state) {
      state.items = [];
    },

  },
});


export const {
  addAlert,
  confirmAlert,
  setAlerts,
  clearAlerts
} = alertsSlice.actions;


export default alertsSlice.reducer;
