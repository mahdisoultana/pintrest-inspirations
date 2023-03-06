import { motion } from 'framer-motion';
import { useState } from 'react';
import src1 from './assets/women king.jpg';
function App() {
  return (
    <div className="bg-black min-h-screen py-10">
      <h1 className="font-Nunito text-7xl mb-10 text-gray-200 font-light p-10 ">
        Double Hover <br /> Image Effect{' '}
      </h1>
      <section className="grid  gap-8 gap-y-24  ">
        {[1, 2, 3, 4].map((i, index) => (
          <Card key={index} index={index} />
        ))}
      </section>
    </div>
  );
}

export default App;

function Card({ index }: { index: number }) {
  return (
    <div className="grid grid-cols-2">
      <div className=" h-[60vh] flex items-center text-3xl font-light pl-4 text-gray-200 font-Nunito">
        {index}
      </div>
      <RightCard />
    </div>
  );
}
function RightCard(): JSX.Element {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className="relative h-[60vh]  overflow-hidden"
    >
      <motion.img
        className="block w-full scale-110 origin-top-right  h-full object-cover absolute top-0 left-0 brightness-200 saturate-200 hue-rotate-180"
        src={src1}
        style={{ filter: 'brightness(100%) saturate(100%) hue-rotate(0deg)' }}
        animate={{
          filter: isEnter
            ? 'brightness(100%) saturate(100%) hue-rotate(0deg)'
            : 'brightness(400%) saturate(200%) hue-rotate(190deg)',

          transition: {
            duration: isEnter ? 0.7 : 2,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.img
        className="shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        animate={{
          clipPath: isEnter
            ? 'polygon(0% 0% ,0% 0%,0% 100%,0% 100%)'
            : 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)',
          transition: {
            duration: 0.7,
            ease: 'easeInOut',
          },
        }}
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={src1}
      />
    </div>
  );
}
