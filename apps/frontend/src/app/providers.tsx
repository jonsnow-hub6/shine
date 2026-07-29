import { Provider } from 'react-redux';

import { store } from './store';

import { ThemeProvider } from '../features/theme/ThemeProvider';
import { AuthProvider } from '../features/auth/AuthProvider';
import { AlertContextProvider } from '../features/alert-context/AlertContextProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <AlertContextProvider>{children}</AlertContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
