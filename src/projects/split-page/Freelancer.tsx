import { motion, useSpring } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import freelancerSrc from './assets/freelancer2.png';
function Freelancer({
  x,
  active,
  children,
}: {
  children: ReactNode;
  x: number;
  active: boolean;
}) {
  const xSpring = useSpring(0, { stiffness: 100, damping: 10, duration: 2 });
  useEffect(() => {
    xSpring.set(x);
  }, [x]);

  return (
    <motion.article
      className="font-Nunito bg-[#723942] h-screen absolute top-0 left-0 w-[50%] border-[#b42b40] border-2 overflow-hidden  flex items-center justify-center pointer-events-none"
      style={active ? { width: xSpring } : { width: '50%' }}
    >
      {children}
      <div className="w-full h-full absolute top-0 left-0 bg-[#890015]/50 mix-blend-soft-light z-10"></div>
      <div className=" w-[1000px]  absolute  bottom-0 left-[635px] -translate-x-1/2  flex items-end justify-center h-full">
        <img src={freelancerSrc} className="w-full h-auto object-contain " />
      </div>
      <h2 className="text-6xl tracking-wider text-gray-100 -ml-20  uppercase font-light">
        FreeLancer
      </h2>
    </motion.article>
  );
}

export default Freelancer;
