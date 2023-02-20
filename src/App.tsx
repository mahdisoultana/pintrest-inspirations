import { AnimatePresence, motion } from 'framer-motion';
import Card from './components/Card';
import Header from './components/Header';
import Line from './components/Line';
import SinglePage from './components/SinglePage';
import { usePageId } from './components/context/RouteProvider';
export const data: { title: string; img: string }[] = [
  {
    title: 'Interstellar',
    img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  },
  {
    title: 'The Dark Knight',
    img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    title: 'The Little Mermaid',
    img: 'https://m.media-amazon.com/images/M/MV5BOWFkOTNhNjEtMjk1MC00MDczLWI2MDMtNzcyNDU3ZjRlYjdkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
  },
  {
    title: 'Joker',
    img: 'https://m.media-amazon.com/images/M/MV5BZmZhNWE1NWEtMWQ1NC00ZWI2LWE0MmItMzgwMjU4MjBlZjg4XkEyXkFqcGdeQXVyMzQ4MDAzOTE@._V1_.jpg',
  },
  {
    title: 'The Wolf of Wall Street',
    img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg',
  },
  {
    title: 'Pulp Fiction',
    img: 'https://m.media-amazon.com/images/M/MV5BYjA2NGQzMDYtNWYwYS00NTIxLThmMzYtZmU3NDM2Y2E4M2M1XkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_.jpg',
  },
  {
    title: 'Inception',
    img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
  },
];

export const mainVar = (duration: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration } },
  exit: { opacity: 0 },
});
export const itemfound = (id: string): number =>
  data.findIndex((it) => it.title == id);
function App() {
  const { id } = usePageId();

  return (
    <AnimatePresence key={id}>
      <motion.div className="font-Nunito text-white font-light bg-[#181818]">
        <Line className="left-1/2" />
        <Line className="right-1/3" />
        <Line className="right-[150px]" />
        <Line className="left-[260px]" />

        <Header>
          <motion.main className=" w-full  h-full  flex space-x-4 px-1 items-center ">
            {data.map((item, key) => (
              <motion.div layoutId={item.title}>
                <Card key={key} img={item.img} title={item.title} index={key} />
              </motion.div>
            ))}

            {data[itemfound(id)] && <SinglePage />}
          </motion.main>
        </Header>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
