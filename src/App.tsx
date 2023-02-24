import { useState } from 'react';
import Netflixvideo from './netflix/assets/Netflix demo animation.mp4';
import netflixSrc from './netflix/assets/netflix-img.jpg';

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <div className="font-Nunito text-white font-light   grid grid-cols-3 gap-y-12 gap-5 m-auto w-[1200px] py-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} />
        ))}
      </div>
    </main>
  );
}

export default App;
function Card() {
  const [sel, setSel] = useState(true);
  return (
    <div className="  rounded-lg shadow-md overflow-hidden shadow-black/60  w-full relative h-[270px]">
      {sel && (
        <img
          src={netflixSrc}
          alt="netflix-img "
          className="absolute top-0 object-cover left-0 w-full h-full bg-gray-900 z-10"
          onClick={() => setSel(false)}
        />
      )}
      <video
        onClick={() => setSel(true)}
        className="w-full h-full relative z-[1] "
        controls
      >
        <source src={Netflixvideo} />
      </video>
    </div>
  );
}
