import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PageIdProvider from './components/context/RouteProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageIdProvider>
      <App />
    </PageIdProvider>
  </React.StrictMode>,
);
