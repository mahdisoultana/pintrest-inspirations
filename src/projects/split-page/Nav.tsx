function Nav() {
  return (
    <nav className="relative z-10 font-Nunito">
      <div className="text-white m-auto w-1000 py-2 flex items-center justify-between  px-6">
        <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-xl font-extralight cursor-pointer hover:opacity-40 border-2 border-[#1196d3] p-2">
          MS
        </div>
        <div className=" flex items-center  space-x-20">
          <ul className=" flex items-center  space-x-12 text-sm font-light">
            <li className="cursor-pointer hover:opacity-40">Find Work</li>
            <li className="cursor-pointer hover:opacity-40">Blog</li>
            <li className="cursor-pointer hover:opacity-40">Community</li>
            <li className="cursor-pointer hover:opacity-40">Contact</li>
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
