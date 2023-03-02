function Footer() {
  return (
    <footer className="footer  fixed top-0 right-0 z-[100] lg:w-[40px] w-[25px]    flex items-center justify-center  h-full bg-gray-100   ">
      <p className="-rotate-90 whitespace-nowrap space-x-2 flex items-center text-[10px] bg-gray-800/95 p-[1px] px-4 text-gray-100 rounded-full shadow-sm shadow-gray-900/60   opacity-10 duration-1000 cursor-pointer hover:opacity-100  ">
        <span className="font-light block">your IP Address :</span>{' '}
        <span className="font-medium block  tracking-wider">129.342.23.01</span>
      </p>
    </footer>
  );
}

export default Footer;
