import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect7({ img }: { img: string }) {
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
      className={`relative h-[430px] w-[550px] ml-auto overflow-hidden cursor-pointer
        `}
    >
      {/* bottom */}
      <img
        ref={bottomElRef}
        className="  border-2   block w-full h-full   object-cover absolute top-0 left-0   "
        src={img}
      />

      {/* Top */}

      <img
        ref={topElRef}
        className="   shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'circle(141.2% at 100% 0%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect7;

function sceneEnter({
  bottomEl,
  topEl,
}: {
  bottomEl: HTMLImageElement;
  topEl: HTMLImageElement;
}) {
  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        ease: 'expo',
      },
    })
    .set(bottomEl, { willChange: 'filter' })
    .set(topEl, { willChange: 'clip-path' })
    .set(bottomEl, { willChange: 'filter', transformOrigin: '50% 50%' })
    .set(topEl, { willChange: 'clip-path' })
    .fromTo(
      topEl,
      {
        clipPath: 'circle(150.2% at 100% 0%)',
      },
      {
        clipPath: 'circle(0% at 100% 0%)',
      },
      0,
    )

    .fromTo(
      bottomEl,
      {
        transformOrigin: '50% 100%',
        rotate: 3,
        filter: 'brightness(0%) saturate(600%)',
      },
      {
        duration: 0.8,
        filter: 'brightness(100%) saturate(100%)',
        rotate: 0,
        scale: 1.2,
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
      defaults: {
        duration: 0.4,
        ease: 'power2.inOut',
      },
    })
    .set(bottomEl, { willChange: 'filter' })
    .set(topEl, { willChange: 'clip-path' })
    .to(
      topEl,
      {
        clipPath: 'circle(150.2% at 100% 0%)',
      },
      0,
    )

    .to(
      bottomEl,
      {
        duration: 0.8,
        filter: 'brightness(0%) saturate(200%)',
        scale: 1,
      },
      0,
    );
  return tl;
}
