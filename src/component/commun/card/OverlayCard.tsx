import { motion, useCycle } from 'framer-motion';
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import { HomeCardType } from '../../../context/types';
import PlayButton from './PlayButton';

function OverlayCard({
  setSelected,
  overLayData,
}: {
  setSelected: (pram: string | null) => void;
  overLayData: Omit<HomeCardType, 'video'>;
}) {
  const variantsC = {
    animate: { opacity: 1, transition: { delay: 2, staggerChildren: 0.5 } },
    initial: { opacity: 0 },
  };

  const [status, setState] = useCycle<'hover' | 'notHover'>(
    'notHover',
    'hover',
  );
  const animate = (dir = 1, anime?: any) => ({
    opacity: status == 'hover' ? 1 : 0,
    x: status == 'hover' ? '0%' : dir > 0 ? '-200%' : '200%',
    transition: { delay: status == 'hover' ? 0.5 : 0 },
    ...anime,
  });
  const hoverEffect = {
    rotate: 375,
    y: [0, -3, 0],
    transition: { duration: 0.5, delay: 0.3 },
  };

  return (
    <div
      className="group rounded-lg"
      onMouseEnter={() => setState()}
      onMouseLeave={() => setState()}
    >
      <motion.img
        animate={{
          scale: status === 'hover' ? 1.1 : 1,
          transition: { duration: 0.5 },
        }}
        src={overLayData.img}
        alt="netflix-img "
        className={`rounded-lg absolute top-0 object-cover left-0 w-full h-full z-10`}
      />
      <div
        className={` absolute top-0 object-cover left-0 w-full h-full bg-gradient-to-l duration-1000 pointer-events-none ${
          status == 'hover'
            ? 'from-black/80 to-transparent'
            : 'to-black/0 from-transparent'
        } z-10`}
      />

      <PlayButton
        onClick={() => {
          setSelected(overLayData.id);
        }}
        status={status}
      />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsC}
        className="absolute right-3 top-4 flex flex-col items-center justify-center space-y-2 z-[11]"
      >
        <motion.div
          whileHover={hoverEffect}
          animate={animate()}
          title="Dribbble"
        >
          <a target="no_blank" href={overLayData.dribble}>
            <FaDribbble className=" cursor-pointer  text-2xl z-10 text-pink-400 hover:text-pink-600" />
          </a>
        </motion.div>
        <motion.div
          whileHover={hoverEffect}
          animate={animate(-1)}
          title="LinkedinIn"
        >
          <a target="no_blank" href={overLayData.linkedIn}>
            <FaLinkedinIn className=" cursor-pointer    text-2xl z-10 hover:text-blue-400  text-blue-500" />
          </a>
        </motion.div>
        <motion.div
          whileHover={hoverEffect}
          animate={animate()}
          title="Instagram"
        >
          <a target="no_blank" href={overLayData.instagram}>
            <FaInstagram className=" cursor-pointer    text-2xl z-10 text-indigo-500 hover:text-red-400" />
          </a>
        </motion.div>
        <motion.div
          whileHover={hoverEffect}
          animate={animate(-1)}
          title="Github"
        >
          <a target="no_blank" href={overLayData.github}>
            <FaGithub className=" cursor-pointer    text-2xl z-10 text-gray-600 hover:text-gray-100" />
          </a>
        </motion.div>
        <div className="pt-9">
          <motion.div
            onClick={() => {
              window.open(overLayData.live);
            }}
            style={{ originY: '50%' }}
            whileHover={hoverEffect}
            animate={animate(-1)}
            title="See The demo live ✨"
            className="  w-10 h-10 p-2 flex items-center justify-center"
          >
            {/* <Link to={overLayData.live}> */}
            <VscLiveShare className=" cursor-pointer   block text-2xl z-10  text-blue-300 hover:text-blue-800" />
            {/* </Link> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default OverlayCard;
