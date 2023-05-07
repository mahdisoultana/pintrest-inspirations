import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect3({ img }: { img: string }) {
  const [isEnter, setIsEnter] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    gsap.to(imgRef.current, {
      clipPath: isEnter
        ? 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
        : 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)',
      ease: 'steps(7)',
      duration: 1,
    });
  }, [isEnter]);
  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className={`relative h-[430px] w-[550px] ml-auto overflow-hidden cursor-pointer
      }`}
    >
      {/* bottom */}
      <motion.img
        className="border-2   block w-full h-full   object-cover absolute top-0 left-0  saturate-200 "
        src={img}
        style={{ scaleX: -0.9, scaleY: 0.9 }}
      />
      {/* Top */}

      <img
        ref={imgRef}
        className="saturate-50 shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect3;
