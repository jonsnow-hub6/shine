import { useEffect } from 'react';
import { useAppSelector } from '../../app/store';
import { startAlertSound, stopAlertSound } from '../../services/alertSound/audioManager';
import { showAlertNotification } from './browserNotifications';

export function AlertNotificationProvider({ children }: { children: React.ReactNode }) {
  const activeAlerts = useAppSelector((state) => state.alerts.pending);

useEffect(() => {

  if(activeAlerts.length === 0){
    stopAlertSound();
    return;
  }


  startAlertSound();


  const latest =
    activeAlerts[0];


  if(document.hidden){

    showAlertNotification(
      latest?.title ?? '',
      latest?.message ?? ''
    );

  }


},[
  activeAlerts.length
]);

  return children;
}
