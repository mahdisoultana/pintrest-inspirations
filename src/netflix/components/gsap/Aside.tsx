import { useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
function Aside() {
  const render = useRef(true);
  useEffect(() => {
    if (render.current) {
      render.current = false;
    }
  }, []);
  return (
    <div className=" w-full  h-full nav  relative ">
      <div className="p-6 flex items-center justify-around search  relative  ">
        <p>Search</p>
        <FiSearch className="text-xl" />
      </div>
      <div className="h-full  flex">
        <ul className="  space-y-3 pt-36 pl-16  uppercase font-extralight text-lg">
          <li className="asideLi opacity-0">Home</li>
          <li className="asideLi opacity-0">Show TV</li>
          <li className="asideLi opacity-0">Movies</li>
          <li className="asideLi opacity-0">Latest</li>
          <li className="asideLi opacity-0">My List</li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
