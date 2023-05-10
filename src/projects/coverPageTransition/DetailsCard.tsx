import { AnimatePresence, motion } from 'framer-motion';
import DetailsCardInfo from './DetailsCardInfo';
import OverLay from './OverLay';
import { useSelectedItem } from './state';
function DetailsCard() {
  const selected = useSelectedItem((s) => s.selected);
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{ animate: {}, exit: {}, initial: {} }}
        >
          <OverLay selected={selected} />
          <DetailsCardInfo selected={selected} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DetailsCard;
