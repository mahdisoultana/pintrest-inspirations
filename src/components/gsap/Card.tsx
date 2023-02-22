import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Card({
  index,
  img,
  title,
}: {
  img: string;
  title: string;
  index: number;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/movie/${title}`)}
      className={`shadow shadow-black/50 cursor-pointer  w-full  ${marg(
        index,
      )} h-[65vh]   relative overflow-hidden`}
    >
      <motion.img
        src={img}
        className="w-full h-full object-cover bg-right relative  block"
      />
      <motion.div
        className={`absolute  top-0 left-0 w-full h-full  bg-[#0d0d0dbd]  z-10 flex items-center pointer-events-none  `}
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
