import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { data, itemfound } from '../../App';
import { usePageId } from '../context/RouteProvider';
function SinglePage() {
  const { id, setId } = usePageId();
  let [opa, setOpa] = useState(false);
  useEffect(() => {
    if (id) {
      setOpa(true);
    }
  }, [id]);
  console.log(id);
  const onBack = () => {
    setOpa(false);
    setTimeout(() => {
      setId('');
    }, 1000);
  };
  return (
    <motion.div
      animate={{ opacity: opa ? 1 : 0, transition: { delay: opa ? 0.3 : 0.5 } }}
      className={`${
        id ? 'pointer-events-auto' : 'pointer-events-none'
      } opacity-0 h-[90vh] pb-20 w-[1100px]  fixed overflow-y-auto rounded-md overflow-x-hidden top-[12vh] left-[250px] z-[100] `}
    >
      <div
        className="h-[74vh] w-full relative  shadow-sm shadow-black/40  rounded-md  single-page z-[1000] p-16"
        style={{ textShadow: '0px 0px 4px black' }}
      >
        <img
          className="w-full  h-full  block object-cover  object-center  absolute top-0 left-0"
          src={data[itemfound(id)]?.img}
        />
        <motion.h1
          animate={{
            opacity: opa ? 1 : 0,
            y: opa ? 0 : -50,
            transition: {
              delay: opa ? 0.5 : 0.5,
              type: 'spring',
              stiffness: 100,
            },
          }}
          className="relative  text-5xl font-bold tracking-tight"
        >
          {data[itemfound(id)]?.title || "It's awesome to see everything here"}
        </motion.h1>
      </div>
      <div className="bg-[#242424]  pb-10 shadow rounded-md ">
        <motion.p
          animate={{
            x: opa ? 0 : -100,
            transition: { delay: opa ? 0.8 : 0.3 },
          }}
        >
          <BackButton onBack={onBack} />
        </motion.p>

        <motion.div
          animate={{
            opacity: opa ? 1 : 0,
            transition: { delay: opa ? 1 : 0 },
            y: opa ? 0 : 100,
          }}
          className="space-y-2 w-1/2 m-auto "
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            quaerat veniam, optio inventore necessitatibus quis voluptas aut,
            voluptatibus sit natus. Minus saepe maiores aliquam consequuntur
            sequi? Perspiciatis, facere odit.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <p
      className="pointer-events-auto pt-2 pb-5 pl-5   italic flex items-center space-x-2  font-medium cursor-pointer"
      onClick={onBack}
    >
      <MdOutlineArrowBack /> <span>back</span>
    </p>
  );
}
export default SinglePage;
