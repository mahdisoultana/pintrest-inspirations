import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect9({ img }: { img: string }) {
  const [isEnter, setIsEnter] = useState(false);
  const topElRef = useRef<HTMLImageElement>(null)!;
  const bottomElRef = useRef<HTMLImageElement>(null)!;
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.add(
      isEnter
        ? sceneEnter({
            topEl: topElRef.current!,
            bottomEl: bottomElRef.current!,
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
      className={`relative h-[430px] w-[550px] ml-auto overflow-hidden cursor-pointer hover:border-2
      `}
    >
      {/* bottom */}
      <motion.img
        ref={bottomElRef}
        className="  border-2    block w-full h-full   object-cover absolute top-0 left-0   "
        src={img}
        style={{
          scale: 2,
          skewX: 45,
          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
        }}
      />

      {/* Top */}

      <motion.img
        ref={topElRef}
        className="   shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        src={img}
        style={{
          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
        }}
      />
    </div>
  );
}

export default Effect9;

function sceneEnter({
  bottomEl,
  topEl,
}: {
  bottomEl: HTMLImageElement;
  topEl: HTMLImageElement;
}) {
  const tl = gsap
    .timeline({
      duration: 0.3,
      ease: 'power4',
    })
    .set(bottomEl, { transformOrigin: '50% 50%' })
    .set(topEl, { willChange: 'clip-path' })
    .fromTo(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)',
      },
      0,
    )

    .fromTo(
      bottomEl,
      {
        skewX: 15,
        scale: 2,
        filter: 'brightness(600%)',
      },
      {
        skewX: 0,
        filter: 'brightness(100%)',
        scale: 1.1,
      },
      0,
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
      ease: 'power4',
      duration: 0.3,
    })
    .set(topEl, { willChange: 'clip-path' })
    .to(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      0,
    )

    .to(
      bottomEl,
      {
        filter: 'brightness(600%)',
        skewX: 15,
        scale: 2,
        onComplete: () => {
          gsap.set(bottomEl, {
            filter: 'brightness(0%)',
          });
        },
      },
      0,
    );

  return tl;
}
