import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { HomeCardType } from '../../../context/types';
import { useSelected } from '../../Home';
import OverlayCard from './OverlayCard';

function Card({ data }: { data: HomeCardType }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { selected, setSelected } = useSelected();

  useEffect(() => {
    const time = setTimeout(() => {
      if (videoRef.current) {
        if (selected === data.id) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, 200);
    return () => clearTimeout(time);
  }, [selected]);

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: {
          duration: 0.3,
        },
      }}
      className=" card  rounded-lg shadow-md overflow-hidden shadow-black/60  w-full relative h-[240px]"
      title={data.title}
    >
      {selected === data.id ? (
        ''
      ) : (
        <OverlayCard setSelected={setSelected} overLayData={data} />
      )}

      <video
        ref={videoRef}
        className="w-full h-full relative z-[1] rounded-lg"
        controls
      >
        <source src={data.video} />
      </video>
    </motion.div>
  );
}
export default Card;
