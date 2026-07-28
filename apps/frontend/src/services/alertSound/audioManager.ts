let alertAudio: HTMLAudioElement | null = null;


export function initAlertSound() {
  if (!alertAudio) {
    alertAudio = new Audio("/sounds/alert.mp3");
    alertAudio.volume = 0.7;
    alertAudio.loop = true;
  }
}


export async function unlockAlertSound() {
  initAlertSound();

  if (!alertAudio) return false;

  try {
    await alertAudio.play();

    alertAudio.pause();
    alertAudio.currentTime = 0;

    return true;
  } catch {
    return false;
  }
}


export function startAlertSound() {
  initAlertSound();

  if (!alertAudio) return;

  if (alertAudio.paused) {
    alertAudio.play().catch(() => {});
  }
}


export function stopAlertSound() {
  if (!alertAudio) return;

  alertAudio.pause();
  alertAudio.currentTime = 0;
}
