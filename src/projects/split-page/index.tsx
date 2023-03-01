import { useEffect, useState } from 'react';
import { create } from 'zustand';
import Freelancer from './Freelancer';
import Handle from './Handle';
import Nav from './Nav';
import Officer from './Officer';
import Particle from './Particle';

export const useX = create<{ x: number; setX: (x: number) => void }>((set) => ({
  x: window.innerWidth / 2,
  setX: (x: number) => set({ x }),
}));
export const useY = create<{ y: number; setY: (y: number) => void }>((set) => ({
  y: window.innerHeight / 2,
  setY: (y: number) => set({ y }),
}));
function SplitPage() {
  const { x, setX } = useX();
  const { y, setY } = useY();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mouseMoveEvent = (e: MouseEvent) => {
      if (active) {
        setX(e.clientX - 5);
        setY(e.clientY - 20);
      }
    };

    window.addEventListener('mousemove', mouseMoveEvent);
    return () => {
      window.removeEventListener('mousemove', mouseMoveEvent);
    };
  }, [active]);
  return (
    <section className=" min-h-screen relative overflow-hidden">
      <Nav />
      <Officer />
      <Freelancer x={x} active={active} />
      <Handle active={active} y={y} setActive={setActive} />
      <Particle active={active} />
    </section>
  );
}

export default SplitPage;
