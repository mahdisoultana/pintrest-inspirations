import { motion } from 'framer-motion';
import { useState } from 'react';
function Effect1({ img }: { img: string }) {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className={`relative h-[430px] w-[550px]  ml-auto overflow-hidden cursor-pointer border-2 ${
        isEnter ? 'border-white' : 'border-transparent'
      }`}
    >
      <motion.img
        className="block w-full scale-110  h-full object-cover absolute top-0 left-0 brightness-200 saturate-200 hue-rotate-180"
        src={img}
        style={{ filter: 'brightness(100%) saturate(100%) hue-rotate(0deg)' }}
        animate={{
          filter: isEnter
            ? 'brightness(100%) saturate(100%) hue-rotate(0deg)'
            : 'brightness(400%) saturate(200%) hue-rotate(190deg)',

          transition: {
            duration: 0.7,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.img
        className="shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        animate={{
          clipPath: isEnter
            ? 'polygon(0% 0% ,0% 0%,0% 100%,0% 100%)'
            : 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)',
          transition: {
            ease: 'easeInOut',
          },
        }}
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect1;
