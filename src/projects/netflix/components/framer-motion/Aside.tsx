import { FiSearch } from 'react-icons/fi';
function Aside() {
  return (
    <div className=" w-full  h-full">
      <div className="p-6 flex items-center justify-around">
        <p>Search</p>
        <FiSearch className="text-xl" />
      </div>
      <div className="h-full  flex">
        <ul className="  space-y-3 pt-36 pl-16  uppercase font-extralight text-lg">
          <li>Home</li>
          <li>Show TV</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
