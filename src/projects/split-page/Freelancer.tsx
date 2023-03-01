import { motion, useSpring } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { Icon } from './Particle';
import freelancerSrc from './assets/freelancer2.png';
function Freelancer({
  x,
  active,
  children,
}: {
  children?: ReactNode;
  x: number;
  active: boolean;
}) {
  const xSpring = useSpring(0, { stiffness: 100, damping: 10, duration: 2 });
  useEffect(() => {
    xSpring.set(x);
  }, [x]);

  return (
    <motion.article
      layout
      className="font-Nunito bg-[#723942] h-screen absolute top-0 left-0  border-[#b42b40] border-2 overflow-hidden  flex items-center  pointer-events-none freelancer-container"
      style={{ width: xSpring }}
    >
      {children}
      <div className="w-full h-full absolute top-0 left-0 bg-[#890015]/50 mix-blend-soft-light z-10"></div>
      <div className=" w-[1000px]  absolute  bottom-0 left-[635px] -translate-x-1/2  flex items-end justify-center h-full   freelancer">
        <img src={freelancerSrc} className="w-full h-auto object-contain " />
      </div>
      <Icon
        IconItem={Text}
        delay={3}
        active={active}
        offset={[0.05, 0.2]}
        className={`text-5xl `}
        isRotate={false}
      />
    </motion.article>
  );
}
const Text = () => (
  <h2 className="text-6xl tracking-wider text-gray-100 -ml-20  uppercase font-light pl-28 ">
    FreeLancer
  </h2>
);

export default Freelancer;
