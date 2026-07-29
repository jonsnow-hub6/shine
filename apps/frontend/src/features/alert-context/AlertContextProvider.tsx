import React from 'react';
import { useIsPWA } from '../../hooks/useIsPWA';
import { useAlertSounds } from './alert-sound/hooks/useAlertSounds';
import { BrowserIsNotSupportedModal } from './alert-sound/components/browserIsNotSupportedModal';
import { useInitialAlertFetch } from './initial-alert-fetch/useInitialAlertFetch';

export const AlertContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPWA = useIsPWA();
  useInitialAlertFetch();
  useAlertSounds();

  return (
    <>
      {children}
      {!isPWA && <BrowserIsNotSupportedModal />}
    </>
  );
};
