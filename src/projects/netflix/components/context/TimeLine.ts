import { default as gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function scene1() {
  const linesTl = gsap.timeline({
    delay: 0.5,
  });
  linesTl.to('.line', {
    height: '100%',
    stagger: 0.4,
    duration: 0.3,
  });
  return linesTl;
}
function scene2() {
  const navTl = gsap.timeline({
    delay: 0.5,
  });
  navTl
    .fromTo('.search', { x: '-100%' }, { x: '0%' })
    .fromTo('.avatar', { x: '130%' }, { x: '0%' }, '-=100%')
    .fromTo(
      '.logo',
      { y: '-130%', opacity: 0 },
      { y: '0%', opacity: 1 },
      '-=10%',
    );
  return navTl;
}
function scene3() {
  const asideTl = gsap.timeline();
  asideTl.to('.asideLi', {
    opacity: 1,
    stagger: 0.2,
    duration: 0.5,
  });
  return asideTl;
}
function scene4() {
  const mainTl = gsap.timeline();
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    gsap.set(card, { opacity: 0 });
    mainTl
      .fromTo(
        card,
        {
          opacity: 0,
          height: '0%',
        },
        {
          opacity: 1,
          height: '95%',
          stagger: 0.1,
          duration: 0.1,
          ease: 'power4.out',
        },
      )
      .fromTo(card.querySelector('p'), { opacity: 0 }, { opacity: 1 });
  });
  mainTl.to('.card', {
    height: '80%',
    ease: 'back.out(3)',
    duration: 0.1,
  });
  return mainTl;
}

export function useAnimeScenes() {
  const render = useRef(true);
  useEffect(() => {
    if (render.current) {
      render.current = false;
      gsap
        .timeline()
        .add(scene1())
        .add(scene2())
        .add(scene3())
        .to('main', { opacity: 1 })
        .add(scene4());
    }
  });
}
let orginalLeft: number | null = null;
function distElFn(left: number): number {
  if (orginalLeft) {
    return orginalLeft;
  }
  orginalLeft = left;
  return left;
}
export function goToEl(
  classElOrigin: string,
  classElTo: string,
  animation?: gsap.TweenVars,
) {
  setTimeout(() => {
    const originEl = document.querySelector(
      classElOrigin,
    ) as HTMLElement | null;

    const elTo = document.querySelector(classElTo) as HTMLElement | null;

    if (!elTo || !originEl) {
      throw new Error(
        `goToEl expect a valid className in dom But we got ${classElTo} ❌`,
      );
    }
    // const pointElTo = newRectPoint(originEl, elTo);

    const originPos = originEl.getBoundingClientRect();
    const distPos = elTo.getBoundingClientRect();
    let left = distElFn(distPos.x - originPos.x + 8);
    let top = distElFn(distPos.y - originPos.y + 8);

    const tl = gsap.timeline();
    tl.to(elTo, {
      x: originPos.x - distPos.x,
      y: originPos.y - distPos.y,
      width: originPos.width,
      height: originPos.height,
      duration: 0.01,
      opacity: 0,
    }).to(elTo, {
      opacity: 1,
      x: left,
      y: top,
      width: distPos.width,
      height: distPos.height,
      duration: 1,
    });
  }, 10);
}
// goToEl('d', '');
