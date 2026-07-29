import React from 'react';
import { useIsPWA } from '../../hooks/useIsPWA';
import { useAlertSounds } from './hooks/useAlertSounds';
import { BrowserIsNotSupportedModal } from './components/browserIsNotSupportedModal';

export const AlertSoundNotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isPWA = useIsPWA();

  useAlertSounds();

  return (
    <>
      {children}
      {!isPWA && <BrowserIsNotSupportedModal />}
    </>
  );
};
