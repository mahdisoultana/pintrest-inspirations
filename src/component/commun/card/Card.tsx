import { motion } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';

import { HomeCardType } from '../../../context/types';
import OverlayCard from './OverlayCard';

const Card = memo(
  function Card({
    data,
    selected,
    setSelected,
  }: {
    selected: boolean;
    setSelected: (pram: string | null) => void;
    data: HomeCardType;
  }) {
    const videoRef = useRef<HTMLVideoElement | null>(null)!;
    console.log(data.id);
    useEffect(() => {
      const time = setTimeout(() => {
        if (videoRef.current) {
          if (selected) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }, 200);
      return () => clearTimeout(time);
    }, [selected]);

    useEffect(() => {
      const pausedFn = () => {
        console.log('paused');
        if (selected) {
          setSelected(null);
        }
      };

      videoRef.current?.addEventListener('pause', pausedFn);

      return () => {
        videoRef.current?.removeEventListener('pause', pausedFn);
      };
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
        {selected ? (
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
  },
  // },
  // (prev, next) => {
  //   //if true shouldn't render other wise false will render that what use memo function do ✨
  //   if (!prev.selected || !prev.selected) {
  //     return false;
  //   }
  //   if (prev.selected != next.data.id) {
  //     return true;
  //   }
  //   return false;
  // },
);
export default Card;
