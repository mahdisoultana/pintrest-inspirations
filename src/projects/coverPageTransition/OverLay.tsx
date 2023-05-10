import { motion } from 'framer-motion';
// import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useSelectedItem } from './state';
function OverLay({ selected }: { selected: boolean }) {
  return (
    <div
      className={`grid grid-rows-2 fixed top-0 left-0 w-full h-screen ${
        selected ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <HalfOverlay top={true} />
      <HalfOverlay top={false} />
      <BackArrow />
    </div>
  );
}
function BackArrow() {
  const selected = useSelectedItem((s) => s.selected);
  const setItem = useSelectedItem((s) => s.setItem);
  return (
    <motion.div
      whileHover={{ x: '-5%' }}
      exit={{ x: '-15%', opacity: 0 }}
      initial={{ x: '-15%', opacity: 0 }}
      onClick={() => setItem({ selected: false })}
      animate={{
        x: '0%',
        opacity: 1,
        transition: { duration: 0.6, delay: selected ? 0.6 : 0 },
      }}
      transition={{ duration: 0.6, delay: selected ? 0.6 : 0 }}
      title="back"
      className="z-[2] opacity-0 py-4 group flex cursor-pointer items-center text-white stroke-orange-300 hover:stroke-white w-[150px] h-2 fixed bottom-8 left-8"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.01 25.04">
        <line x1="216.01" y1="12.44" x2="0.24" y2="12.44" />
        <line x1="0.24" y1="12.44" x2="22.64" y2="24.6" />
        <line x1="22.64" y1="0.44" x2="0.24" y2="12.6" />
      </svg>
    </motion.div>
  );
}

function HalfOverlay({ top }: { top: boolean }) {
  const DURATION = 0.6;
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      exit={{
        scaleY: 0,
        transition: { duration: DURATION, delay: DURATION },
      }}
      animate={{
        scaleY: 1,
        transition: { duration: DURATION },
      }}
      className={`bg-black w-full h-ful ${top ? 'top-0' : 'bottom-0'}  `}
      style={{ transformOrigin: top ? '50% 0% ' : '50% 100% ', scaleY: 2 }}
    />
  );
}

export default OverLay;
