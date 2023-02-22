import { ReactNode } from 'react';
import Header from './components/gsap/Header';
import Line from './components/gsap/Line';
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

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="font-Nunito text-white font-light bg-[#181818]">
        <Line className="left-1/2" />
        <Line className="right-1/3" />
        <Line className="right-[150px]" />
        <Line className="left-[260px]" />

        <Header>
          <main className=" w-full  h-full  flex space-x-4 px-1 items-center ">
            {children}
          </main>
        </Header>
      </div>
    </>
  );
}

export default App;

// ------------
export const itemfound = (id: string): number =>
  data.findIndex((it) => it.title == id);
