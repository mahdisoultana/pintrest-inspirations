import { motion, useAnimationControls } from 'framer-motion';
import React from 'react';
import { usePageId } from './context/RouteProvider';

function Card({
  index,
  img,
  title,
}: {
  img: string;
  title: string;
  index: number;
}) {
  const marg = (index: number): string => {
    let mr = 'mt-0';
    switch (index) {
      case 0: {
        mr = '-mt-28';
        break;
      }

      case 1: {
        mr = '-mt-14';
        break;
      }

      case 2: {
        mr = 'mt-0';
        break;
      }

      case 3: {
        mr = '-mt-12';
        break;
      }

      case 4: {
        mr = 'mt-0';
        break;
      }

      case 5: {
        mr = '-mt-14';
        break;
      }
      case 6: {
        mr = '-mt-28';
        break;
      }
      default: {
        mr = 'mt-0';
        break;
      }
    }
    return mr;
  };
  const { setId, id } = usePageId();

  const cardAnimation = useAnimationControls();
  type Hover = 'hover' | 'not-hover';
  const [state, setState] = React.useState<Hover>('not-hover');
  console.log(state);
  return (
    <motion.div
      // layoutId={title}
      onClick={() => setId(title)}
      animate={cardAnimation}
      className={`shadow shadow-black/50 cursor-pointer w-[100%] duration-300 origin-left delay-500    ${marg(
        index,
      )} h-[65vh]   relative overflow-hidden`}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('not-hover')}
    >
      <motion.img
        src={img}
        className="w-full h-full object-cover bg-right relative  scale-150 hover:scale-100 duration-700 delay-300 ease-in-out   block"
      />
      <motion.div
        className={`absolute
       duration-500 top-0 left-0 w-full h-full ${
         state == 'hover' ? 'bg-[#18181800] ' : 'bg-[#0d0d0dbd]'
       }   z-10 flex items-center pointer-events-none  `}
      >
        <p className="   font-medium tracking-wide pl-5 pr-2">{title}</p>
      </motion.div>
    </motion.div>
  );
}

export default Card;
