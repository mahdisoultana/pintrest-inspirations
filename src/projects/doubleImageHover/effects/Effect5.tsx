import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect5({ img }: { img: string }) {
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
        className="  border-2   block w-full h-full   object-cover absolute top-0 left-0  saturate-200 "
        src={img}
      />

      {/* Top */}

      <img
        ref={topElRef}
        className="  saturate-50 shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'circle(70.7% at 50% 50%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect5;

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
        ease: 'power2',
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
        scale: 1.5,
        filter: 'brightness(400%) saturate(200%) hue-rotate(190deg)',
      },
      {
        scale: 1.3,
        filter: 'brightness(100%) saturate(100%) hue-rotate(0deg)',
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
        scale: 2,
        filter: 'brightness(400%) saturate(200%) hue-rotate(190deg)',
      },
      0,
    );
  return tl;
}
