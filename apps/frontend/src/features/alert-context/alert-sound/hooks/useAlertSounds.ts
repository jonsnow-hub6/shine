import { useMemo, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveAlerts } from '../../../alerts/alertsSelectors';

export function useAlertSounds() {
  const activeAlerts = useSelector(selectActiveAlerts);

  const hasActiveAlerts = useMemo(
    () =>
      Array.isArray(activeAlerts)
        ? activeAlerts.length > 0
        : Object.keys(activeAlerts || {}).length > 0,
    [activeAlerts],
  );

  // Maintain a persistent audio instance
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/alert.mp3');
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;

    if (hasActiveAlerts) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignores autoplay restrictions or abort errors
        });
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [hasActiveAlerts]);
}
