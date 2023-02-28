import gsap from 'gsap';
import { useEffect, useRef } from 'react';
export function useGsap(animeFn: (g: typeof gsap) => void) {
  const render = useRef(true);
  useEffect(() => {
    if (render.current) {
      render.current = false;
      animeFn(gsap);
    }
  });
}
