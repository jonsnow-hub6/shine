import { Provider } from 'react-redux';

import { store } from './store';

import { ThemeProvider } from '../features/theme/ThemeProvider';
import { AuthProvider } from '../features/auth/AuthProvider';
import { AlertSoundNotificationProvider } from '../services/AlertSoundNotificationProvidor';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <AlertSoundNotificationProvider>
            {children}
          </AlertSoundNotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
