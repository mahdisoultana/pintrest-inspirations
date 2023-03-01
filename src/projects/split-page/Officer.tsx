import { Icon } from './Particle';
import officerSrc from './assets/officier.jpg';
function Officer({ active }: { active: boolean }) {
  return (
    <article className=" bg-[#1196d3] h-screen absolute top-0 left-0 w-full   border-2 border-blue-200  flex justify-center items-end pointer-events-none officier-container ">
      <div className=" w-[1000px]   flex justify-center items-end  officier">
        <img src={officerSrc} className="w-full h-auto object-contain" />
      </div>
      <Icon
        IconItem={Text}
        delay={2}
        active={active}
        offset={[0.1, 0.05]}
        className={`text-5xl `}
        isRotate={false}
      />
    </article>
  );
}

const Text = () => (
  <h2
    className="text-6xl tracking-wider text-gray-100 absolute
       -translate-y-[55vh]  -translate-x-[100%] left-1/2  uppercase font-light "
  >
    Office
  </h2>
);
export default Officer;
