import { useEffect } from "react";
import { useAppSelector } from "../../app/store";
import { startAlertSound, stopAlertSound } from "../../services/alertSound/audioManager";





export function AlertNotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const activeAlerts = useAppSelector(
    state => state.alerts.pending
  );


  useEffect(() => {

    if (activeAlerts.length > 0) {
      startAlertSound();
    } 
    else {
      stopAlertSound();
    }

  }, [activeAlerts.length]);


  return children;
}
