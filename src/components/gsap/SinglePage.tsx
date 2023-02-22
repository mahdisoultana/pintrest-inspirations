import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { data, itemfound } from '../../App';
import { usePageId } from '../context/RouteProvider';

function SinglePage() {
  const { id } = usePageId();
  return (
    <div className="h-full w-[1100px] pr-4 fixed top-[18vh] left-[250px] z-[100]   ">
      <div className="h-[74vh] w-full relative overflow-hidden shadow-sm shadow-black/40 p-12 rounded-md  ">
        <img
          className="w-full h-full block object-cover  object-center  absolute top-0 left-0"
          src={data[itemfound(id)]?.img}
        />
        <h1 className="relative  text-5xl font-bold tracking-tight">
          {data[itemfound(id)]?.title || "It's awesome to see everything here"}
        </h1>
      </div>
      <BackButton />
    </div>
  );
}
function BackButton() {
  const navigate = useNavigate();
  return (
    <p
      className=" pt-2 pb-5  italic flex items-center space-x-2  font-medium cursor-pointer"
      onClick={() => navigate('/')}
    >
      <MdOutlineArrowBack /> <span>back</span>
    </p>
  );
}
export default SinglePage;
