import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
function Effect8({ img }: { img: string }) {
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
            middleEl: middleElRef.current!,
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
        className="  border-2   block w-full h-full   object-cover absolute top-0 left-0   "
        src={img}
        // style={{ scaleX: -0.9, scaleY: 0.9 }}
      />
      {/*middle */}

      <img
        ref={middleElRef}
        className="    shadow shadow-black block w-full  h-full   object-cover absolute top-0 left-0"
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
      {/* Top */}

      <img
        ref={topElRef}
        className="   shadow shadow-black block w-full  h-full object-cover absolute top-0 left-0"
        style={{ clipPath: 'polygon(0% 0% ,100% 0%,100% 100%,0% 100%)' }}
        src={img}
      />
    </div>
  );
}

export default Effect8;

function sceneEnter({
  bottomEl,
  topEl,
  middleEl,
}: {
  bottomEl: HTMLImageElement;
  middleEl: HTMLImageElement;
  topEl: HTMLImageElement;
}) {
  const DURATION = 0.6;
  const tl = gsap
    .timeline({
      defaults: {
        duration: DURATION / 2,
        ease: 'power1',
      },
    })
    .addLabel('start', 0)
    .set([middleEl, bottomEl], { willChange: 'filter' })
    .set([middleEl, topEl], { willChange: 'clip-path' })
    .fromTo(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      'start',
    )
    .fromTo(
      middleEl,
      {
        filter: 'brightness(600%) saturate(200%) ',
      },
      {
        filter: 'brightness(100%) saturate(100%) ',
      },
      'start',
    )

    .fromTo(
      middleEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      `start+=${DURATION / 2}`,
    )

    .fromTo(
      bottomEl,
      {
        filter: 'brightness(600%) saturate(200%)',
      },
      {
        filter: 'brightness(100%) saturate(100%)',
      },
      `start+=${DURATION / 2}`,
    );
  return tl;
}

function sceneLeave({
  bottomEl,
  topEl,
  middleEl,
}: {
  bottomEl: HTMLImageElement;
  topEl: HTMLImageElement;
  middleEl: HTMLImageElement;
}) {
  const DURATION = 0.6;
  const tl = gsap
    .timeline({
      defaults: {
        duration: DURATION / 2,
        ease: 'power1',
      },
    })
    .addLabel('start', 0)
    .set([middleEl, bottomEl], { willChange: 'filter' })
    .set([middleEl, topEl], { willChange: 'clip-path' })
    .to(
      bottomEl,
      {
        filter: 'brightness(150%) saturate(150%)',
      },
      `start`,
    )
    .to(
      middleEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      `start`,
    )
    .to(
      middleEl,
      {
        filter: 'brightness(150%) saturate(150%)',
      },
      `start+=${DURATION / 2}`,
    )
    .to(
      topEl,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      `start+=${DURATION / 2}`,
    );

  return tl;
}
