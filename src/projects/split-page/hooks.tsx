import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { create } from 'zustand';
export const useX = create<{ x: number; setX: (x: number) => void }>((set) => ({
  x: window.innerWidth / 2,
  setX: (x: number) => set({ x }),
}));
export const useY = create<{ y: number; setY: (y: number) => void }>((set) => ({
  y: window.innerHeight / 2,
  setY: (y: number) => set({ y }),
}));

export const useMousePosition = (): {
  x: number;
  y: number;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
} => {
  const { x, setX } = useX();
  const { y, setY } = useY();
  const [active, setActive] = useState(false);
  const [amount, setActiveAmount] = useState(100);

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
  }, [active, amount]);
  return { x, active, setActive, y };
};
