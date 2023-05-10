import { motion } from 'framer-motion';
import Slide from './Slide';
import { useSelectedItem } from './state';
function DetailsCardInfo({ selected }: { selected: boolean }) {
  const { src, title, text, id, year } = useSelectedItem();
  const DURATION = 0.4;
  return (
    <motion.section
      className={`fixed top-0 pointer-events-none left-0 w-full h-full lg:p-14 p-5  `}
    >
      <div
        className={`h-[300px] w-full relative flex items-center justify-center `}
      >
        <motion.img
          initial={{
            clipPath: 'polygon(0% 0%,100% 0%,100% 0%,0% 0%)',
          }}
          animate={{
            clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',

            transition: { duration: DURATION, delay: DURATION + 0.2 },
          }}
          exit={{
            clipPath: 'polygon(0% 100%,100% 100%,100% 100%,0% 100%)',
            transition: { duration: DURATION * 0.8 },
          }}
          src={src}
          className="w-full h-full top-0 left-0 absolute object-cover object-center"
        />
        <Slide
          exit={{
            y: '-100%',
            transition: { duration: DURATION * 0.8 },
          }}
          initial={{ y: '100%' }}
          animate={{
            y: selected ? 0 : '100%',
            transition: { duration: DURATION + 0.3, delay: DURATION * 2 },
          }}
        >
          <h1 className="xl:text-[10rem]  lg:text-[5rem] text-[3rem]  font-extralight text-white font-Bodoni z-10 relative h-[8rem]   flex items-center justify-center">
            {title?.split(' ')[1]}
          </h1>
        </Slide>
      </div>
    </motion.section>
  );
}

export default DetailsCardInfo;
