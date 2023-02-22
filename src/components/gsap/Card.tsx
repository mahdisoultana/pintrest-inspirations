import { motion } from 'framer-motion';
import { usePageId } from '../context/RouteProvider';
import { goToEl } from '../context/TimeLine';

function Card({
  index,
  img,
  title,
}: {
  img: string;
  title: string;
  index: number;
}) {
  const { setId, id } = usePageId();

  return (
    <motion.div
      onClick={() => {
        goToEl('.card-' + index, '.single-page');
        setId(title);
      }}
      animate={{
        opacity: id.length && id !== title ? [1, 0] : [0, 1],
        y: id.length && id !== title ? [0, 50] : [30, 0],
      }}
      className={`   origin-bottom card flex-shrink-0 shadow shadow-black/50 cursor-pointer  w-[120px] hover:w-[250px] duration-500 ${
        'card-' + index
      }  ${marg(index)} h-[65vh]   relative overflow-hidden`}
    >
      <motion.img
        src={img}
        className={`w-full h-full object-cover bg-right relative  block `}
      />
      <motion.div
        className={`absolute
         top-0 left-0 w-full h-full  bg-[#0d0d0dbd] hover:bg-[#0d0d0d00] z-10 flex items-center duration-300  `}
      >
        <p className="   font-medium tracking-wide pl-5 pr-2">{title}</p>
      </motion.div>
    </motion.div>
  );
}

export default Card;

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
