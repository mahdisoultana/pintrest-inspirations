// import src1 from './assets/women king.jpg';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import CopyRightFooter from '../../component/CopyRightFooter';
import Effect1 from './effects/Effect1';
import Effect2 from './effects/Effect2';
import Effect3 from './effects/Effect3';
import Effect4 from './effects/Effect4';
import Effect5 from './effects/Effect5';
import Effect6 from './effects/Effect6';
import Effect7 from './effects/Effect7';
import Effect8 from './effects/Effect8';
import Effect9 from './effects/Effect9';
function App() {
  return (
    <div className="bg-black min-h-screen py-10 font-Lora  italic">
      <h1 className="  text-7xl mb-10 text-gray-200 font-light p-10 ">
        Double Hover <br /> Image Effect{' '}
      </h1>
      <section className="grid  gap-8 gap-y-52  ">
        {[
          { number: 'I', img: '/doubleEffect/5.png' },
          { number: 'VI', img: '/doubleEffect/6.png' },
          { number: 'III', img: '/doubleEffect/7.png' },
          { number: 'II', img: '/doubleEffect/8.png' },
          { number: 'V', img: '/doubleEffect/16.png' },
          { number: 'IV', img: '/doubleEffect/22.png' },
          { number: 'IIV', img: '/doubleEffect/18.png' },
          { number: 'IIIV', img: '/doubleEffect/19.png' },
          { number: 'IX', img: '/doubleEffect/10.png' },
          // { number: 'X', img: '/doubleEffect/1.png' },
        ].map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
        <CopyRightFooter
          imageSource="midjourney"
          imageSourceLink="https://www.midjourney.com/"
        />
      </section>
    </div>
  );
}

export default App;

function Card({
  number,
  img,
  index,
}: {
  index: number;
  number: string;
  img: string;
}) {
  return (
    <motion.div
      className="grid grid-cols-2 opacity-0 "
      whileInView={{ opacity: 1 }}
      viewport={{ margin: '-200px' }}
    >
      <div className=" h-[60vh] flex items-center text-5xl font-light  pl-14 text-gray-50    ">
        {number}
      </div>
      <Effects img={img} index={index + 1} />
    </motion.div>
  );
}

function Effects({ index, img }: { index: number; img: string }): ReactElement {
  switch (index) {
    case 1: {
      return <Effect1 img={img} />;
    }
    case 2: {
      return <Effect2 img={img} />;
    }
    case 3: {
      return <Effect3 img={img} />;
    }
    case 4: {
      return <Effect4 img={img} />;
    }
    case 5: {
      return <Effect5 img={img} />;
    }
    case 6: {
      return <Effect6 img={img} />;
    }
    case 7: {
      return <Effect7 img={img} />;
    }
    case 8: {
      return <Effect8 img={img} />;
    }
    case 9: {
      return <Effect9 img={img} />;
    }
    default: {
      return <Effect7 img={img} />;
    }
  }
}
