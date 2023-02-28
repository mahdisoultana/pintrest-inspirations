import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
function LikeButton() {
  const [count, setCount] = useState(342);
  const Varbtn = {
    animate: { opacity: 1, scale: 1, y: 0 },
    initial: { opacity: 0, scale: 1.4, y: -10 },
    exit: { opacity: 0, scale: 0.7, y: 10 },
  };
  return (
    <div
      className="flex items-center justify-center flex-col relative cursor-pointer hover:text-red-500"
      title="let me know you liked projects ❤"
      onClick={() => setCount((count) => (count == 342 ? count + 1 : 342))}
    >
      <button
        className={`flex items-center justify-center hover:text-red-500 `}
      >
        {count > 342 ? (
          <motion.div
            variants={{
              animate: { opacity: 1, scale: [1.3, 1] },
              initial: { opacity: 0, scale: 0.2 },
            }}
            animate="animate"
            initial="initial"
          >
            <AiTwotoneHeart className="text-red-500 " />
          </motion.div>
        ) : (
          <motion.div
            variants={{
              animate: { opacity: 1, scale: [0, 1] },
              initial: { opacity: 0, scale: 0.2 },
            }}
            animate="animate"
            initial="initial"
          >
            <CiHeart />
          </motion.div>
        )}
      </button>
      <AnimatePresence>
        <motion.p
          key={count}
          variants={Varbtn}
          animate="animate"
          initial="initial"
          exit="exit"
          className=" absolute  top-2/3 text-xs  pt-2 cursor-pointer    "
        >
          {count}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default LikeButton;
