import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect4({ img }: { img: string }) {
  const [isEnter, setIsEnter] = useState(false);
  const topElRef = useRef<HTMLImageElement>(null)!;
  const bottomElRef = useRef<HTMLImageElement>(null)!;
  const middleElRef = useRef<HTMLImageElement>(null)!;
  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(
      isEnter
        ? sceneEnter({
            topEl: topElRef.current!,
            bottomEl: bottomElRef.current!,
            middleEl: middleElRef.current!,
          })
        : sceneLeave({
            topEl: topElRef.current!,
            bottomEl: bottomElRef.current!,
          }),
    );
  }, [isEnter]);
  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      className={`relative h-[430px] w-[550px] ml-auto overflow-hidden cursor-pointer
      }`}
    >
      {/* bottom */}
      <motion.img
        ref={bottomElRef}
        className="  border-2   block w-full h-full   object-cover absolute top-0 left-0  saturate-200 "
        src={img}
        style={{ scaleX: -0.9, scaleY: 0.9 }}
      />
      {/*middle */}

      <img
        ref={middleElRef}
        className="  saturate-200 brightness-200 shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
      {/* Top */}

      <img
        ref={topElRef}
        className="  saturate-50 shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect4;

function sceneEnter({
  bottomEl,
  topEl,
  middleEl,
}: {
  bottomEl: HTMLImageElement;
  middleEl: HTMLImageElement;
  topEl: HTMLImageElement;
}) {
  const DURATION = 0.25;
  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: 'none',
      },
    })
    .addLabel('start', 0)
    .set([topEl, middleEl], { willChange: 'clip-path' })
    .fromTo(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      },
      'start',
    )
    .fromTo(
      middleEl,
      {
        xPercent: 0,
      },
      {
        duration: DURATION,
        ease: 'elastic.out(5)',
        xPercent: -3,
        repeat: 1,
      },
      'start',
    )
    .fromTo(
      middleEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      },
      `start+=${DURATION * 0.5}`,
    )
    .fromTo(
      bottomEl,
      {
        xPercent: 0,
        yPercent: 0,
      },
      {
        duration: DURATION,
        ease: 'elastic.inOut(5)',
        xPercent: 2,
        yPercent: -2,
        repeat: 1,
      },
      `start+=${DURATION * 0.7}`,
    );
  return tl;
}

function sceneLeave({
  bottomEl,
  topEl,
}: {
  bottomEl: HTMLImageElement;
  topEl: HTMLImageElement;
}) {
  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.4,
        ease: 'none',
      },
    })
    .set(topEl, { willChange: 'clip-path' })
    .to(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      0,
    );
  return tl;
}
