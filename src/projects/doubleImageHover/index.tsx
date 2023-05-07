// import src1 from './assets/women king.jpg';
import { ReactElement } from 'react';
import Effect1 from './effects/Effect1';
import Effect2 from './effects/Effect2';
import Effect3 from './effects/Effect3';
function App() {
  return (
    <div className="bg-black min-h-screen py-10 font-Lora  italic">
      <h1 className="  text-7xl mb-10 text-gray-200 font-light p-10 ">
        Double Hover <br /> Image Effect{' '}
      </h1>
      <section className="grid  gap-8 gap-y-52  ">
        {[
          { number: 'V', img: '/doubleEffect/5.png' },
          { number: 'VI', img: '/doubleEffect/6.png' },
          { number: 'VII', img: '/doubleEffect/7.png' },
          { number: 'VIII', img: '/doubleEffect/8.png' },
          { number: 'I', img: '/doubleEffect/1.png' },
          { number: 'II', img: '/doubleEffect/2.png' },
          { number: 'III', img: '/doubleEffect/3.png' },
          { number: 'IV', img: '/doubleEffect/4.png' },
          // { number: 'IX', img: '/doubleEffect/1.png' },
          // { number: 'X', img: '/doubleEffect/1.png' },
        ].map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
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
    <div className="grid grid-cols-2">
      <div className=" h-[60vh] flex items-center text-5xl font-light pl-14 text-gray-50    ">
        {number}
      </div>
      <Effects img={img} index={index + 1} />
    </div>
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
      return <Effect1 img={img} />;
    }
    case 5: {
      return <Effect1 img={img} />;
    }
    case 6: {
      return <Effect1 img={img} />;
    }
    default: {
      return <Effect1 img={img} />;
    }
  }
}
