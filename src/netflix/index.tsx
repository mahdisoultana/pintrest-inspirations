import PageIdProvider from './components/context/RouteProvider';
import RoutesApp from './components/gsap/router';

import App from './App';

function Netflix() {
  return (
    <PageIdProvider>
      <App>
        <RoutesApp />
      </App>
    </PageIdProvider>
  );
}

export default Netflix;
