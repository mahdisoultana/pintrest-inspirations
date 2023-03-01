import { motion, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { IconType } from 'react-icons';
import { BsCircle } from 'react-icons/bs';
import { TbTriangleInverted } from 'react-icons/tb';
import { useX, useY } from './hooks';
function Particle({ active }: { active: boolean }) {
  return (
    <div className="absolute top-0 left-0 bg-red-500/0 z-[110] w-full h-screen pointer-events-none opacity-1 particle-container">
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <Icon
            delay={i * 1}
            active={active}
            offset={[i * 0.3, -i * 0.07]}
            IconItem={TbTriangleInverted}
            className={`text-5xl  ${
              i == 1
                ? 'top-[80%]'
                : i == 2
                ? 'top-[3rem]'
                : i == 3
                ? 'top-2/4'
                : 'top-3/4'
            }
            ${
              i == 1
                ? ' left-1/4 '
                : i == 2
                ? 'left-[3rem]'
                : i == 3
                ? 'left-[10%]'
                : 'left-[80%]'
            }
               absolute `}
            reverseRotate={false}
          />
        </div>
      ))}
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <Icon
            delay={i * 1.5}
            active={active}
            offset={[i * 0.1, i * 0.05]}
            IconItem={BsCircle}
            className={`text-5xl  ${
              i == 1
                ? 'top-[10%]'
                : i == 2
                ? 'top-[79%]'
                : i == 3
                ? 'top-1/2'
                : 'top-[10%]'
            }
            ${
              i == 1
                ? ' left-1/4 '
                : i == 2
                ? 'left-[3rem]'
                : i == 3
                ? 'left-[60%]'
                : 'left-[80%]'
            }
               absolute `}
            reverseRotate={false}
          />
        </div>
      ))}
      {/* {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <Icon
            delay={i * 1.5}
            active={active}
            offset={[i * 0.1, i * 0.1]}
            IconItem={RiFireLine}
            className={`text-5xl   ${
              i == 1
                ? 'top-[10%]'
                : i == 2
                ? 'top-[39%]'
                : i == 3
                ? 'top-[89%]'
                : 'top-[45%]'
            }
            ${
              i == 1
                ? ' left-[60%] '
                : i == 2
                ? 'left-[40%]'
                : i == 3
                ? 'left-[70%]'
                : 'left-[80%]'
            }
               absolute `}
            reverseRotate={false}
          />
        </div>
      ))} */}
    </div>
  );
}
type ElementType = () => JSX.Element;
export function Icon({
  active,
  delay,
  IconItem,
  className = '',
  offset = [0.05, 0.4],
  reverseRotate = false,
  isRotate = true,
}: {
  delay: number;
  active: boolean;
  isRotate?: boolean;
  reverseRotate?: boolean;
  offset: [number, number];
  className: string;
  IconItem: IconType | ElementType;
}) {
  const { x } = useX();
  const { y } = useY();
  const weight = window.innerWidth;
  const height = window.innerHeight;

  const centerX = (x - weight / 2) * offset[0];
  const centerY = (y - height / 2) * offset[1];
  const xSpring = useSpring(centerX);
  const ySpring = useSpring(centerY);
  useEffect(() => {
    xSpring.set(centerX);
    ySpring.set(centerY);
  }, [centerX, centerY]);

  return (
    <motion.div
      layout="position"
      style={{
        x: xSpring,
        y: ySpring,

        rotate: !isRotate ? 0 : reverseRotate ? xSpring : xSpring,
      }}
      animate={
        active
          ? {}
          : {
              y: [(centerY - 10) * delay * 0.5, (centerY + 10) * delay * 0.5],

              transition: {
                delay: -delay,
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }
      }
      className={' text-white ' + className}
    >
      <IconItem />
    </motion.div>
  );
}

export default Particle;
