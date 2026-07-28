const alertSound =
  new Audio("/sounds/alert.mp3");


export function playAlertSound() {
  alertSound.currentTime = 0;
  alertSound.play()
    .catch(() => {
      // Browser blocked autoplay
    });
}
