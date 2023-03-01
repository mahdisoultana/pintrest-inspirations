function Nav() {
  return (
    <nav className="nav relative z-10 font-Nunito ">
      <div className="text-white m-auto w-1000 py-2 flex items-center justify-between  px-6">
        <div
          className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-xl font-extralight cursor-pointer hover:opacity-40 border-2 border-[#1196d3] p-2"
          title="Mahdi Soultana"
        >
          MS
        </div>
        <div className=" flex items-center  space-x-20">
          <ul className=" flex items-center  space-x-12 text-sm font-light">
            <li className="cursor-pointer hover:opacity-40" title="Find Work">
              Find Work
            </li>
            <li className="cursor-pointer hover:opacity-40" title="Blog">
              Blog
            </li>
            <li className="cursor-pointer hover:opacity-40" title="Community">
              Community
            </li>
            <li className="cursor-pointer hover:opacity-40" title="Contact">
              Contact
            </li>
          </ul>
          <button className="cursor-pointer hover:opacity-40 bg-black rounded-full px-[20px] py-[7px] text-xs  shadow border-2 border-[#1196d3]">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
