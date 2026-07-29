import { configureStore } from '@reduxjs/toolkit';

import alertsReducer from '../features/alerts/alertsSlice';
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
