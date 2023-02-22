import { usePageId } from '../context/RouteProvider';
import Home from './Home';
import SinglePage from './SinglePage';
const RoutesApp = () => {
  const { id } = usePageId();

  return (
    <>
      <Home />
      <SinglePage />
    </>
  );
};
export default RoutesApp;
