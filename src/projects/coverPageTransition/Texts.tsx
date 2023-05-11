import Slide from './Slide';

function Texts({
  duration = 0.7,
  year,
  text,
  title,
}: {
  year?: string;
  title?: string;
  text?: string;
  duration?: number;
}) {
  const transition = { duration };
  const variants = {
    animate: {
      opacity: 1,
      y: '0%',
      scaleY: 1,
      transition: { ...transition, delay: duration },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      scaleY: 1.6,
      transition,
    },
    initial: { scaleY: 1.6, opacity: 0, y: '100%' },
  };
  return (
    <div className="text-white font-Nunito font-light grid lg:grid-cols-2 grid-cols-1  h-[200px] mt-4 gap-4 leading-5 text-sm">
      <div className="h-full w-full ">
        {[year, title].map((i) => (
          <Slide
            key={i}
            animate={variants['animate']}
            initial={variants['initial']}
            exit={variants['exit']}
          >
            <p key={i}>{i}</p>
          </Slide>
        ))}
      </div>
      <div className="grid grid-cols-2 h-full gap-4 ">
        <div className="h-full w-full  ">
          <Slide
            animate={variants['animate']}
            initial={variants['initial']}
            exit={variants['exit']}
            className="mb-4"
          >
            <p className=" font-Lora text-gray-200 text-lg  ">LOCATION</p>
          </Slide>
          {[
            ' AND IF IT RAINS, A CLOSED CAR',
            ' AT FOUR. AND WE SHALL PLAY A',
            ' GAME OF CHESS, PRESSING',
            ' LIDLESS EYES AND WAITING',
            ' FOR A KNOCK UPON THE DOOR.',
          ].map((i) => (
            <Slide
              key={i}
              animate={variants['animate']}
              initial={variants['initial']}
              exit={variants['exit']}
            >
              <p>{i}</p>
            </Slide>
          ))}
        </div>

        <div className="h-full w-full  ">
          <Slide
            className="mb-4"
            animate={variants['animate']}
            initial={variants['initial']}
            exit={variants['exit']}
          >
            <p className=" font-Lora text-gray-200 text-lg  ">MATERIAL</p>
          </Slide>
          {[
            'AT THE VIOLET HOUR, WHEN',
            'THE EYES AND BACK, TURN',
            'UPWARD FROM THE DESK,',
            'WHEN THE HUMAN ENGINE',
            'WAITS.',
          ].map((i) => (
            <Slide
              key={i}
              animate={variants['animate']}
              initial={variants['initial']}
              exit={variants['exit']}
            >
              <p>{i}</p>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Texts;
