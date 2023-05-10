import { Route, Routes } from 'react-router-dom';

import App from '../App';
import DoubleImageHoverEffect from '../projects/doubleImageHover';
import Netflix from '../projects/netflix';

import CoverPageTransition from '../projects/coverPageTransition';
import FramerConcepts from '../projects/framer-concepts';
import SplitPage from '../projects/split-page';

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/netflix" element={<Netflix />} />

      <Route path="/cover-page-transition" element={<CoverPageTransition />} />
      <Route path="/framer-concepts" element={<FramerConcepts />} />
      <Route path="/split-page" element={<SplitPage />} />
      <Route
        path="/double-image-hover-effect"
        element={<DoubleImageHoverEffect />}
      />
    </Routes>
  );
}

export default RouterPages;
