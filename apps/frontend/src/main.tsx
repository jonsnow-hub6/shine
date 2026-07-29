import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from './app/providers';

import './styles.css';
import './styles/scrollbar.css';
import './styles/animations.css';

import App from './app/app';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
