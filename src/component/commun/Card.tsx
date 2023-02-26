import { motion, useCycle, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import { HomeCardType } from '../../context/types';

function Card({ data }: { data: HomeCardType }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [sel, setSel] = useState(true);
  useEffect(() => {
    if (videoRef.current) {
      if (sel) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [sel]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('pause', (e) => {
        setSel(true);
      });
      videoRef.current.addEventListener('play', (e) => {
        setSel(false);
      });
    }
  }, []);
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.04,
        transition: { stiffness: 300, type: 'spring' },
      }}
      className="  rounded-lg shadow-md overflow-hidden shadow-black/60  w-full relative h-[270px]"
    >
      {sel && <OverlayCard setSel={setSel} overLayData={data} />}

      <video ref={videoRef} className="w-full h-full relative z-[1] " controls>
        <source src={data.video} />
      </video>
    </motion.div>
  );
}
export default Card;
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
          transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' },
        }}
      >
        <motion.div className="absolute w-full h-full top-0 left-0 group-hover:block hidden opacity-0  duration-700 ">
          {[
            { bg: 'bg-red-300/50' },
            { bg: 'bg-orange-500/30' },
            { bg: 'bg-blue-600/70' },
          ].map((item, index) => (
            <Bubble key={index} bg={item.bg} index={index} />
          ))}
        </motion.div>
        <AiFillPlayCircle className="  rounded-full w-full h-full text-6xl relative  duration-600" />
      </motion.div>
    </button>
  );
}
// -----------------------
function Bubble({ bg, index }: { index: number; bg: string }) {
  const variantsItem = {
    initial: {},
    animate: (i: number) => {
      const num = i + Math.random() * 1;

      return {
        opacity: [0, 1, 0],
        scale: [0, 1.4, 2],
        transition: {
          repeat: Infinity,
          duration: 6,
          delay: num + -1,
        },
      };
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variantsItem}
      custom={index}
      className={`w-[100%] h-[100%]  rounded-full absolute ${bg} `}
    />
  );
}
// -----------------------
function OverlayCard({
  setSel,
  overLayData,
}: {
  setSel: (pram: boolean) => void;
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
    transition: { delay: status == 'hover' ? 0.4 : 0 },
    ...anime,
  });
  const hoverEffect = {
    rotate: 375,
    y: [0, -5, 0],
    transition: { duration: 0.5, delay: 0.3 },
  };

  return (
    <div
      className="group"
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
        className={`absolute top-0 object-cover left-0 w-full h-full z-10`}
      />
      <div
        className={` absolute top-0 object-cover left-0 w-full h-full bg-gradient-to-l duration-1000 pointer-events-none ${
          status == 'hover'
            ? 'from-black/80 to-transparent'
            : 'to-black/0 from-transparent'
        } z-10`}
      />

      <PlayButton onClick={() => setSel(false)} status={status} />

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantsC}
        className="absolute right-4 top-2 flex flex-col items-center justify-center space-y-4 z-[11]"
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
        <motion.div
          onClick={() => {
            window.open(overLayData.live);
          }}
          style={{ originY: '50%' }}
          whileHover={hoverEffect}
          animate={animate(-1)}
          title="See The demo live ✨"
          className=" mt-12 w-10 h-10 p-2 flex items-center justify-center"
        >
          {/* <Link to={overLayData.live}> */}
          <VscLiveShare className=" cursor-pointer   block text-2xl z-10  text-blue-300 hover:text-blue-800" />
          {/* </Link> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
