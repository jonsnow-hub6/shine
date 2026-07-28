import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useEffect } from 'react';
import { fetchAlerts } from '../features/alerts/alertsApi';
import { setAlerts } from '../features/alerts/alertsSlice';
import { useAppDispatch } from './store';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      const alerts = await fetchAlerts();
      dispatch(setAlerts(alerts));
    }

    init();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
