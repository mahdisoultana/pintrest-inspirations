import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PageIdProvider from './components/context/RouteProvider';
import RoutesApp from './components/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageIdProvider>
      <BrowserRouter>
        <App>
          <RoutesApp />
        </App>
      </BrowserRouter>
    </PageIdProvider>
  </React.StrictMode>,
);
