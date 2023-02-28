import { useEffect, useState } from 'react';
import { create } from 'zustand';
import Freelancer from './Freelancer';
import Handle from './Handle';
import Nav from './Nav';
import Officer from './Officer';

export const useX = create<{ x: number; setX: (x: number) => void }>((set) => ({
  x: 0,
  setX: (x: number) => set({ x: x }),
}));
function SplitPage() {
  const { x, setX } = useX();
  const [y, setY] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mouseMoveEvent = (e: MouseEvent) => {
      if (active) {
        setX(e.clientX);
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
      <Freelancer x={x} active={active}>
        <Handle
          active={active}
          y={y}
          setActive={setActive}
          className="absolute right-0 top-0 z-[100]"
        />
      </Freelancer>
    </section>
  );
}

export default SplitPage;
