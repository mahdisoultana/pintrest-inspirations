import { AnimationProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
function Slide({
  children,
  animate,
  initial,
  exit,
  className,
}: {
  animate: AnimationProps['animate'];
  initial: AnimationProps['initial'];
  exit: AnimationProps['exit'];
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div animate={animate} initial={initial} exit={exit}>
        {children}
      </motion.div>
    </div>
  );
}

export default Slide;
