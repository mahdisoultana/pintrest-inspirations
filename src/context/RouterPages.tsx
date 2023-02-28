import { Route, Routes } from 'react-router-dom';

import App from '../App';
import Netflix from '../projects/netflix';
import SplitPage from '../projects/split-page';

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/split-page" element={<SplitPage />} />
    </Routes>
  );
}

export default RouterPages;
