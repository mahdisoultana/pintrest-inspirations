import officerSrc from './assets/officier.jpg';
function Officer() {
  return (
    <article className=" bg-[#1196d3] h-screen absolute top-0 left-0 w-full   border-2 border-blue-200  flex justify-center items-end pointer-events-none">
      <div className=" w-[1000px]   flex justify-center items-end ">
        <img src={officerSrc} className="w-full h-auto object-contain" />
      </div>
      <h2
        className="text-6xl tracking-wider text-gray-100 absolute top-1/2
      left-2/3 -translate-y-1/2  uppercase font-light"
      >
        Office
      </h2>
    </article>
  );
}

export default Officer;
