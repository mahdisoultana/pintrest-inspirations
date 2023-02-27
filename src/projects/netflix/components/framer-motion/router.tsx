import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SinglePage from './SinglePage';
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<SinglePage />} />
    </Routes>
  );
};
export default RoutesApp;
