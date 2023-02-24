import { Route, Routes } from 'react-router-dom';

import App from './App';
import Netflix from './netflix';

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/netflix" element={<Netflix />} />
    </Routes>
  );
}

export default RouterPages;
