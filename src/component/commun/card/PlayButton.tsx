import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
// -----------------------
type PropsType = {
  status: 'hover' | 'notHover';
} & React.ComponentPropsWithoutRef<'button'>;
function PlayButton(props: PropsType) {
  const y = useMotionValue(0);

  const color = useTransform(y, [0, -10], ['#EEE', '#ed4e40']);
  return (
    <button
      title={'play video Preview ✅'}
      {...props}
      className="abs-center w-[50px] h-[50px] shadow hover:shadow-md duration-1000 shadow-black   rounded-full  z-10 flex items-center justify-center  hover:scale-[1.2]"
    >
      <motion.div
        style={{ color, y }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1 }}
        animate={{
          y: props.status === 'hover' ? [0, -10] : [0, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            stiffness: 130,
          },
        }}
      >
        {/* <motion.div className="absolute w-full h-full top-0 left-0 group-hover:block hidden opacity-0  duration-700 ">
          {[
            { bg: 'bg-red-300/50' },
            { bg: 'bg-orange-500/30' },
            { bg: 'bg-blue-600/70' },
          ].map((item, index) => (
            <Bubble key={index} bg={item.bg} index={index} />
          ))}
        </motion.div> */}
        <AiFillPlayCircle className="  rounded-full w-full h-full text-6xl relative  duration-600" />
      </motion.div>
    </button>
  );
}

export default PlayButton;

// ----------------------------
// function Bubble({ bg, index }: { index: number; bg: string }) {
//   const variantsItem = {
//     initial: {},
//     animate: (i: number) => {
//       const num = i + Math.random() * 1;

//       return {
//         opacity: [0, 1, 0],
//         scale: [0, 1.4, 2],
//         transition: {
//           repeat: Infinity,
//           duration: 6,
//           delay: num + -1,
//         },
//       };
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variantsItem}
//       custom={index}
//       className={`w-[100%] h-[100%]  rounded-full absolute ${bg} `}
//     />
//   );
// }
