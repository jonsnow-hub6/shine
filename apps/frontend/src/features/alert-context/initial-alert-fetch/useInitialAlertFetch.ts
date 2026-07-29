import { useAppDispatch } from "apps/frontend/src/app/store";
import { useEffect } from "react";
import { fetchAlerts } from "../../alerts/alertsApi";
import { setAlerts } from "../../alerts/alertsSlice";

export function useInitialAlertFetch() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      const alerts = await fetchAlerts();
      dispatch(setAlerts(alerts));
    }

    init();
  }, [dispatch]);
}