import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect6({ img }: { img: string }) {
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
      }`}
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
        style={{ clipPath: 'circle(70.7% at 50% 50%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect6;

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
    .fromTo(
      topEl,
      {
        clipPath: 'circle(70.7% at 50% 50%)',
      },
      {
        clipPath: 'circle(0% at 50% 50%)',
      },
      0,
    )

    .fromTo(
      bottomEl,
      {
        scale: 1,
        filter: 'brightness(80%) contrast(200%) hue-rotate(-90deg)',
      },
      {
        scale: 1.3,

        filter: 'brightness(100%) contrast(100%) hue-rotate(0deg)',
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
        clipPath: 'circle(70.7% at 50% 50%)',
      },
      0,
    )

    .to(
      bottomEl,
      {
        filter: 'brightness(0%) contrast(400%)',
        scale: 3.3,
      },
      0,
    );
  return tl;
}
