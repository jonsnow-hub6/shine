import { useState, useEffect } from 'react';

const checkIsPWA = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: minimal-ui)').matches ||
    window.matchMedia('(display-mode: window-controls-overlay)').matches ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.navigator as any).standalone === true ||
    document.referrer.includes('android-app://')
  );
};

export const useIsPWA = (): boolean => {
  const [isPWA, setIsPWA] = useState<boolean>(checkIsPWA);

  useEffect(() => {
    // 1. Listen for display-mode media query changes directly
    const mediaQuery = window.matchMedia('(display-mode: standalone)');

    const handleChange = () => {
      setIsPWA(checkIsPWA());
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange); // Fallback for older Safari
    }

    // 2. Re-check when window regains focus or becomes visible ("Open in App" trigger)
    const handleRecheck = () => {
      setIsPWA(checkIsPWA());
    };

    window.addEventListener('focus', handleRecheck);
    document.addEventListener('visibilitychange', handleRecheck);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
      window.removeEventListener('focus', handleRecheck);
      document.removeEventListener('visibilitychange', handleRecheck);
    };
  }, []);

  return isPWA;
};
