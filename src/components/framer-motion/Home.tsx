import { data } from '../App';
import Card from './Card';
export const mainVar = (duration: number) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0, transition: { duration } },
});
function Home() {
  return (
    <>
      {data.map((item, key) => (
        <Card key={key} index={key} img={item.img} title={item.title} />
      ))}
    </>
  );
}

export default Home;
