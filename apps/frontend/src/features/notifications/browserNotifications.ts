export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    return false;
  }

  const permission = await Notification.requestPermission();

  return permission === 'granted';
}

export function showAlertNotification(title: string, message: string) {
  if (Notification.permission !== 'granted') {
    return;
  }

  new Notification(title, {
    body: message,
    icon: '/images/alert.png',
    requireInteraction: true,
  });
}
