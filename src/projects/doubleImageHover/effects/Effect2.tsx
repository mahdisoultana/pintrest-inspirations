import { motion } from 'framer-motion';
import { useState } from 'react';
function Effect2({ img }: { img: string }) {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className={`relative h-[430px] w-[550px] ml-auto overflow-hidden cursor-pointer border-2 ${
        isEnter ? 'border-white' : 'border-transparent'
      }`}
    >
      <motion.img
        className="block w-full    h-full object-cover absolute top-0 left-0 brightness-200 saturate-200 hue-rotate-180"
        src={img}
        style={{ filter: 'brightness(100%)  hue-rotate(0deg)' }}
        animate={{
          filter: isEnter
            ? 'brightness(100%)  hue-rotate(0deg)'
            : 'brightness(400%)   hue-rotate(190deg)',
          scale: isEnter ? 1.2 : 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
      />

      <motion.img
        className="shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        animate={{
          clipPath: isEnter
            ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
            : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',

          transition: {
            ease: 'easeOut',
            duration: 0.3,
          },
        }}
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect2;
