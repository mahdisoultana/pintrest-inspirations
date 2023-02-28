function Nav() {
  return (
    <nav className="relative z-10 font-Nunito">
      <div className="text-white m-auto w-1000 py-2 flex items-center justify-between  px-6">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-xl font-extralight">
          HR
        </div>
        <div className=" flex items-center  space-x-20">
          <ul className=" flex items-center  space-x-12 text-sm font-light">
            <li>Find Work</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
          <button className="bg-black rounded-full px-[20px] py-[7px] text-xs  shadow">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
