import { motion, useAnimationControls } from 'framer-motion';
import Aside from './Aside';
import Line from './Line';
import Nav from './Nav';
function Header() {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="flex min-h-screen justify-stretch w-[100vw] overflow-hidden relative">
      <Line className="left-1/2" />
      <Line className="right-1/3" />
      <Line className="right-[150px]" />
      <div className="w-[270px]  flex-shrink-0 relative">
        <Aside />
        <Line />
      </div>
      <div
        className="w-full min-h-screen relative"
        style={{ display: 'grid', gridTemplateRows: 'min-content 1fr' }}
      >
        <Nav />
        <main className=" w-full  h-full  flex space-x-4 px-1 items-center ">
          {data.map((i, key) => (
            <Card key={key} index={key} />
          ))}
        </main>
      </div>
    </section>
  );
}

function Card({ index }: { index: number }) {
  const marg = (index: number): string => {
    let mr = 'mt-0';
    switch (index) {
      case 0:
        mr = '-mt-28';
        return mr;

      case 1:
        mr = '-mt-14';
        return mr;

      case 2:
        mr = '-mt-0';
        return mr;

      case 3:
        mr = '-mt-12';
        return mr;

      case 2:
        mr = 'mt-0';
        return mr;

      case 5:
        mr = '-mt-14';
        return mr;
      case 6:
        mr = '-mt-28';
        return mr;
      default:
        mr = 'mt-0';
        return mr;
    }
  };

  const cardAnimation = useAnimationControls();
  return (
    <motion.div
      animate={cardAnimation}
      className={` w-[60%] hover:w-[110%] duration-300  ${marg(
        index,
      )} h-[65vh] ease-out  bg-gray-300`}
    ></motion.div>
  );
}
export default Header;
