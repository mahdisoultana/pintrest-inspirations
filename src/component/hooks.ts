import gsap from 'gsap';
import { RefObject, useEffect, useRef, useState } from 'react';
export function useGsap(animeFn: (g: typeof gsap) => void) {
  const render = useRef(true);
  useEffect(() => {
    if (render.current) {
      render.current = false;
      animeFn(gsap);
    }
  });
}

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return point;
}
