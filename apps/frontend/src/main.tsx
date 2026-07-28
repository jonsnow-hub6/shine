import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { AlertsList } from './alerts/components/AlertList';
import { AuthProvider } from './auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthProvider>

    <BrowserRouter>
        <AlertsList />

    </BrowserRouter>
    </AuthProvider>

  </StrictMode>
);
