import { Provider } from 'react-redux';

import { store } from './store';

import { ThemeProvider } from '../features/theme/ThemeProvider';
import { AuthProvider } from '../features/auth/AuthProvider';
import { AlertNotificationProvider } from '../features/notifications/AlertNotificationProvider';
import { AudioUnlockProvider } from '../services/alertSound/AlertAudioUnlockProvidor';
import { SoundPermissionModal } from '../services/alertSound/SoundsPermissionModal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <AudioUnlockProvider>
            <SoundPermissionModal/>
          <AlertNotificationProvider>{children}</AlertNotificationProvider>
          </AudioUnlockProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
