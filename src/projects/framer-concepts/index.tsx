function FramerConcepts() {
  return (
    <section className="w-full min-h-screen bg-gray-900">
      <Nav />
    </section>
  );
}

export default FramerConcepts;
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        layout
        onClick={() => setIsHover((s) => !s)}
        className={`top-4 left-4 fixed text-black bg-white text-sm cursor-pointer  `}
        style={{
          padding: isHover ? '2rem 1rem' : '.5rem',
          borderRadius: isHover ? '1em 10em' : '2rem',
        }}
      >
        <FramerLogo />
        {isHover && <ListNav />}
      </motion.div>
    </AnimatePresence>
  );
};
const FramerLogo = () => {
  return (
    <motion.div layout className="flex items-center space-x-2 pl-2">
      <motion.div layout className="w-[15px] h-[15px] block flex-shrink-0">
        <motion.svg
          layout
          xmlns="http:www.w3.org/2000/svg"
          viewBox="0 0 14 21"
          role="presentation"
        >
          <motion.path
            layout
            d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"
            fill="currentColor"
          ></motion.path>
        </motion.svg>
      </motion.div>
      <motion.p layout>Motion</motion.p>
    </motion.div>
  );
};

const ListNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <motion.ul
      className="space-y-4 px-4 pr-2 pt-4 capitalize font-light "
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {['Layout', 'gesture', 'scroll', 'transition'].map((i, index) => (
        <motion.li
          layout
          className="relative cursor-pointer hover:text-blue-500"
          onClick={(e) => {
            e.stopPropagation();
            setSelected(index);
          }}
        >
          {index == selected && (
            <motion.span
              layoutId="bullet"
              className="w-2 h-2 rounded-full bg-blue-500 block absolute -left-4 top-1/2 -translate-y-1/2"
            ></motion.span>
          )}
          {i}
        </motion.li>
      ))}
    </motion.ul>
  );
};
