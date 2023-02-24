import { data } from '../../App';
import Card from './Card';

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
