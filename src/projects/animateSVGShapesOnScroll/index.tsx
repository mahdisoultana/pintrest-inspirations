import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import CopyRightFooter from '../../component/CopyRightFooter';
import './style.css';
gsap.registerPlugin(ScrollTrigger);

function AnimateSVGShapesOnScroll() {
  useEffect(() => {
    scrollBase();
  }, []);
  return (
    <section className="bg-gray-100 text-black w-full min-h-screen overflow-hidden    font-Bodoni   flex items-center justify-center flex-col">
      <Intro />
      <ImgShap src="/tea/2.jpg" />
      <TwoColumnContent />
      <ImgShap src="/tea/6.jpg" />
      <GridColumns />
      <Sperial />
      <CenteredText />
      <Sperial />
      <ImgShapWithText className="text-white" />
      <Chinise />
      <section className=" max-w-[1200px] w-full m-auto relative  ">
        <ImgShap
          imgClipPath={true}
          src="/tea/6.jpg"
          className="   w-full h-screen "
        />
        <ImgShap
          src="/tea/2.jpg"
          imgClipPath={true}
          className=" absolute top-1/2 -translate-y-1/2 left-0 w-full h-screen "
        />
        <ImgShap
          imgClipPath={true}
          src="/tea/1.jpg"
          className=" w-full h-screen "
        />
      </section>
      <TwoColumnContentStart />

      <Sperial
        colorPath="white"
        className="w-[100vw] bg-black flex items-center justify-center  "
      />
      <div className="bg-black w-[100vw]">
        <CopyRightFooter
          className="py-20 text-orange-400  text-sm font-Nunito bg-black w-[100vw]"
          imageSource="unsplash"
          imageSourceLink="https://unsplash.com/collections/9833981/china"
          codropLink="https://tympanus.net/Tutorials/OnScrollPathAnimations/"
        />
      </div>
    </section>
  );
}
function Chinise() {
  return (
    <p className="lg:text-8xl text-3xl text-center my-20 font-Noto  grid grid-cols-3 gap-2 lg:w-[450px] w-[250px] m-auto">
      <span className="flex flex-col"> 柿くへば</span>
      <span className="flex flex-col"> 鐘が鳴るなり</span>
      <span className="flex flex-col"> 法隆寺</span>
    </p>
  );
}
function GridColumns() {
  return (
    <section className="grid lg:grid-cols-2 m-auto max-w-[700px] w-[100vw] gap-x-14 mt-[100px]">
      {[1, 2, 3, 4].map((i) => {
        const classLeft = 'w-[500px] top-0 left-[-160px] absolute';
        const classRight = 'w-[500px] top-0 right-[-170px] absolute';
        return (
          <div
            className={`h-[450px] w-full relative  border border-white/20 bg-gray-900 ${
              i % 2 == 0 && 'lg:mt-[150px]'
            }`}
          >
            <SVGPath
              height="100%"
              className={i % 2 == 0 ? classRight : classLeft}
              curvePath={
                i % 2 == 0 ? PortraitcurvePathRight : PortraitcurvePathLeft
              }
              straightPath={
                i % 2 == 0 ? PortraitcurvePathLeft : PortraitcurvePathRight
              }
            />
            <SVGPath
              height="100%"
              className={i % 2 == 0 ? classLeft : classRight}
              curvePath={
                i % 2 == 0 ? PortraitcurvePathLeft : PortraitcurvePathRight
              }
              straightPath={
                i % 2 == 0 ? PortraitcurvePathRight : PortraitcurvePathLeft
              }
            />
          </div>
        );
      })}
    </section>
  );
}
function TwoColumnContent() {
  const classLeft = 'w-[500px] top-0 left-[-155px] absolute';
  const classRight = 'w-[500px] top-0 right-[-167px] absolute';
  return (
    <section className=" m=auto my-10 max-w-[1000px] lg:p-4 w-full mt-10 grid lg:grid-cols-2  min-h-screen   text-right text-lg  ">
      <div className="px-12">
        <h2 className="lg:text-7xl text-3xl leading-[5.5rem] p-10 font-light text-semiDark">
          <span>Mastering </span>
          <span>The Now</span>
        </h2>
        <p className="font-Nunito">
          Sit down, and I shall tell thee. The thirst for love, without love of
          learning, sinks into simpleness. Love of knowledge, without love of
          learning, sinks into vanity. Love of truth, without love of learning,
          sinks into cruelty. Love of straightness, without love of learning,
          sinks into rudeness. Love of daring, without love of learning, sinks
          into turbulence. Love of strength, without love of learning, sinks
          into oddity.
        </p>
      </div>
      <div className="w-full   relative  lg:h-full  h-screen ">
        <SVGPath
          height="100%"
          className={classRight}
          curvePath={PortraitcurvePathRight}
          straightPath={PortraitcurvePathLeft}
        />
        <SVGPath
          height="100%"
          className={classLeft}
          curvePath={PortraitcurvePathLeft}
          straightPath={PortraitcurvePathRight}
        />
        <img
          className="  w-full h-full block object-cover absolute top-0 left-0"
          src="/tea/5.jpg"
        />
      </div>
    </section>
  );
}
function TwoColumnContentStart() {
  const classLeft = ' top-0 left-[-155px] absolute';
  const classRight = ' top-0 right-[-167px] absolute';
  return (
    <div className="bg-black w-[100vw] mt-20">
      <section className="m-auto max-w-[1000px] mt-10 grid lg:grid-cols-2  min-h-screen py-[3vh]  text-right text-lg mb-10 items-center">
        <div className="w-full h-full relative">
          <SVGPath
            start="top 80%"
            end="bottom 0%"
            colorPath="black"
            height="110%"
            className={
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] scale-y-[1.01]'
            }
            straightPath="M1366,768H0V0h1366V768z M659.5-75.5 M1247.5,478.5c25-178.9-224.4-354.6-408-420
	c-247.9-88.3-607.8-57.8-680,119C85,360,324.2,680.2,617.5,748.5C883.7,810.5,1220.5,671,1247.5,478.5z
	"
            curvePath="M1366,768H0V0h1366V768z M659.5-75.5 M1184.5,424.5c6.6-177.9-208.1-332-396-367c-149.2-27.8-383.3,0.6-461,159
	c-89.6,182.8,66.8,461.7,290,532C869.5,827.9,1176.8,632,1184.5,424.5z
	"
          />

          <img
            className="w-full h-full block object-cover absolute top-0 left-0"
            src="/tea/3.jpg"
          />
        </div>
        <h2 className="lg:text-7xl text-3xl leading-[5.5rem] p-10 font-light text-white">
          <span>Without </span>
          <span>Longing</span>
        </h2>
      </section>
    </div>
  );
}
function CenteredText({
  text1 = 'Virtues',
  text2 = 'Excellence',
  className = '',
}) {
  return (
    <h1 className={'lg:text-[10rem]  text-3xl my-20   text-right ' + className}>
      <span className="font-light block text-5xl">{text1} </span>
      <span className=" font-Bodoni"> {text2}</span>
    </h1>
  );
}

function Intro() {
  return (
    <article className="relative min-h-screen flex flex-col  justify-between items-center overflow-hidden  text-semiDark">
      <h1 className="lg:text-7xl text-3xl my-auto">
        <span className="font-light block">Crafting</span>
        <span className="font-semibold">Transcendence</span>
      </h1>
      <div className="text-center flex items-center justify-center flex-col space-y-4">
        <h2 className=" text-sm font-light">scroll if you wish</h2>
        <motion.div
          animate={{
            y: [-10, 10],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror',
            },
          }}
          className="w-[1px] h-20 bg-black"
        ></motion.div>
      </div>
    </article>
  );
}
function ImageClipPath({
  height = '100vh',
  className = '',
  src = '/tea/1.jpg',
  animPath = 'M 0.5 246.5 c 528.5 153.5 827.5 144.5 1366 7 L 1366 598 C 826 722 539 734 0 598 L 0.5 246.5 z',
  path = 'M 0.5 246.5 c 490.5 -147.5 844.5 -162.5 1366 7 L 1366 598 C 821 426 498 446 0 598 L 0.5 246.5 z',
}) {
  const svgRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,

          // markers: true,
          scrub: 2,
          start: 'top center',
        },
      })
      .to(pathRef.current, {
        attr: {
          d: animPath,
        },
      });
  }, []);
  return (
    <svg
      ref={svgRef}
      className={`z-[200] pointer-events-none h-[${height}]  flex items-center justify-center ${className} `}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1366 768"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="shape1">
          <path ref={pathRef} d={path} />
        </clipPath>
      </defs>
      <image
        clip-path="url(#shape1)"
        xlinkHref={src}
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </svg>
  );
}
function ImgShap({
  className = ' relative ',
  src = '/tea/2.jpg',
  imgClipPath = false,
  zIndex = '1',
}) {
  return imgClipPath ? (
    <ImageClipPath className={className} src={src} />
  ) : (
    <article
      style={{ zIndex }}
      className={` bg-gray-900 w-full h-screen overflow-hidden    ${className}`}
    >
      {/* top */}
      <SVGPath2
        height="100vh"
        curvePath="M-0.5,0c298.4,224.2,480,230.7,591,194.3c124.4-40.8,200.2-148.6,339-127.3c105.1,16.2,140.1,90,232,83.9
	c89.7-6,158.5-83.1,204-150.9H-0.5z"
        straightPath="M-0.5,0c298.4,0,480,0,591,0c124.4,0,200.2,0,339,0c105.1,0,140.1,0,232,0c89.7,0,158.5,0,204,0H-0.5z"
      />
      {/* bottom */}

      <img
        className="block absolute top-0 left-0 object-cover w-full h-full z-10"
        src={src}
        alt="tea"
      />
      <SVGPath2
        straightPath="M-0.5,768.5c298.4-5.8,480-6,591-5.1c124.4,1.1,200.2,3.9,339,3.3c105.1-0.4,140.1-2.3,232-2.2
	c89.7,0.2,158.5,2.2,204,3.9H-0.5z"
        className="absolute bottom-0 left-0 w-full h-[400px]  "
        curvePath="M-0.5,768.5c298.4-227.3,480-233.9,591-197c124.4,41.4,200.2,150.6,339,129c105.1-16.4,140.1-91.2,232-85
	c89.7,6.1,158.5,84.3,204,153H-0.5z"
      />
    </article>
  );
}
function SVGPath2({
  colorPath = 'fill-gray-100',
  straightPath = straithPath,
  curvePath = curvePath1,
  height = '100vh',
  className = 'absolute top-0 left-0 w-full  ',
}) {
  const svgRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          end: 'center 20%',
          // markers: true,
          scrub: 2,
        },
      })
      .to(pathRef.current, {
        attr: {
          d: straightPath,
        },
      });
  }, []);
  return (
    <svg
      ref={svgRef}
      className={`z-[200] pointer-events-none h-[${height}] ${className} block`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1366 768"
      xmlSpace="preserve"
      preserveAspectRatio="none"
    >
      <path ref={pathRef} d={curvePath} className={colorPath} />
    </svg>
  );
}
function SVGPath({
  colorPath = 'fill-gray-100',
  straightPath = straithPath,
  curvePath = curvePath1,
  height = '100vh',
  className = 'absolute top-0 left-0 w-full  ',
  start = 'center bottom',
  end = 'center top',
}) {
  const svgRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  let animPath = '';
  if (PortraitcurvePathRight === curvePath) {
    animPath =
      'M 911.2 782 c 0 0 6.2 -788.2 -0.3 -782.7 S 1066 112 1069 275 C 1050 439 887.2 487.2 911.2 782 z';
  } else if (PortraitcurvePathLeft === curvePath) {
    animPath =
      'M 419.9 -26 c 0 0 -4.4 806.5 0.3 801 c 4.7 -5.6 1.8 -128 -2.2 -265 C 417 368 426 275 419.9 -26 z';
  } else {
    animPath = straightPath;
  }
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start,
          end,
          // markers: true,
          scrub: 0.3,
        },
      })
      .to(pathRef.current, {
        attr: {
          d: animPath,
        },
      });
  }, []);
  return (
    <svg
      ref={svgRef}
      className={`z-[200] pointer-events-none h-[${height}] ${className} block`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1366 768"
      xmlSpace="preserve"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={curvePath}
        data-path-anim=""
        className={colorPath}
      />
    </svg>
  );
}

function ImgShapWithText({
  className = '',
  src = '/tea/2.jpg',
  text1 = 'Language of',
  text2 = 'Awekening',
}) {
  return (
    <article
      className={` bg-gray-900 relative min-h-screen w-[100vw]   ${className}`}
    >
      {/* M0,0c0,0,1375.5-8.5,1366,0s-209.7,166.5-433.5,177.5
      C709.5,188.5,514.5,31.5,0,0z*/}
      <SVGPath
        start="30% 80%"
        end="bottom 0%"
        straightPath="M 0 0 c 0 0 1375.5 -8.5 1366 0 s -199 -5 -442 -5 C 680 -2 520 -5 0 0 z"
        curvePath="M0,0c0,0,1375.5-8.5,1366,0s-209.7,166.5-433.5,177.5
      C709.5,188.5,514.5,31.5,0,0z"
      />
      <SVGPath
        start="top 80%"
        end="bottom 0%"
        straightPath="M 1399 774.1 c 0 0 -1408.7 8.8 -1398.9 0 c 18.9 -0.1 271.9 0.9 410.9 2.9 c 146 -2 196 -1 382 0 c 100.2 -0.6 143 1 321 -4 C 1303 777 1303 774 1399 774.1 z"
        className="bottom-0 left-0 absolute"
        curvePath="M1399,774.1c0,0-1408.7,8.8-1398.9,0
	c9.7-8.8,259.5-184.7,387.6-188.6c100.2-3,263.2,118.9,381,118.3c100.2-0.6,200.9-136.8,347.2-118.3
	C1265.5,604.5,1299.6,767.9,1399,774.1z"
      />
      <img
        src={src}
        alt="tea"
        className="bg-gray-900    absolute top-0 left-0 object-cover w-[100vw] h-full"
      ></img>
      <h3 className="lg:text-[10rem] text-3xl    text-right absolute center z-10 ">
        <span className="font-light block text-5xl">{text1}</span>
        <span className=" font-Bodoni"> {text2}</span>
      </h3>
    </article>
  );
}
function Sperial({ className = ' ', flip = false, colorPath = '#260404' }) {
  return (
    <div
      className={`min-h-screen   w-[100vw] text-white relative  overflow-hidden ${
        flip ? 'rotate-180' : 'rotate-0'
      } ${className}`}
    >
      <SVGSperial
        colorPath={colorPath}
        path="M0,369c34.1-29,88.1-65.3,150-59c70.7,7.1,85.1,63,159,74c85.1,12.6,99.8-56.4,198-56
	c103.1,0.4,135.8,76.7,215,53c50.7-15.2,55.8-51.9,103-53c54.7-1.3,65.2,47.6,120,49c62.2,1.5,82.2-60.8,135-51
	c43.2,8,44.7,52.6,85,56c49.6,4.2,76.4-61,113-50c30.1,9,30.8,58.7,52,60c11.7,0.7,28.1-13.4,50-73"
      />
      <SVGSperial
        top="top-[12rem]"
        path="M0,369c34.1-29,88.1-65.3,150-59c70.7,7.1,85.1,63,159,74c85.1,12.6,99.8-56.4,198-56
	c103.1,0.4,135.8,76.7,215,53c50.7-15.2,55.8-51.9,103-53c54.7-1.3,65.2,47.6,120,49c62.2,1.5,82.2-60.8,135-51
	c43.2,8,44.7,52.6,85,56c49.6,4.2,76.4-61,113-50c30.1,9,30.8,58.7,52,60c11.7,0.7,28.1-13.4,50-73"
        colorPath={colorPath}
      />
      <SVGSperial
        top="top-[-5rem]"
        path="M0,369c34.1-29,88.1-65.3,150-59c70.7,7.1,85.1,63,159,74c85.1,12.6,99.8-56.4,198-56
	c103.1,0.4,135.8,76.7,215,53c50.7-15.2,55.8-51.9,103-53c54.7-1.3,65.2,47.6,120,49c62.2,1.5,82.2-60.8,135-51
	c43.2,8,44.7,52.6,85,56c49.6,4.2,76.4-61,113-50c30.1,9,30.8,58.7,52,60c11.7,0.7,28.1-13.4,50-73"
        colorPath={colorPath}
      />
      <SVGSperial
        top="top-[-10rem]"
        path="M7,367c26.6-31.2,65.3-66.1,108-62c50.9,4.9,57.3,60.4,109,72c77,17.3,119.4-93.3,205-83
	c69.7,8.4,80.8,86.5,142,83c63.1-3.6,81.6-88.4,138-84c46.6,3.6,53,62.8,103,67c49.7,4.2,61.1-52.8,116-58
	c74.5-7.1,109.6,92.6,171,80c53-10.9,63.8-92.7,100-89c37.6,3.8,50,94.4,73,92c23.3-2.4,23.3-96.5,45-99c11.9-1.4,27.8,24.8,49,90"
        colorPath={colorPath}
      />
    </div>
  );
}
function SVGSperial({
  top = 'top-0',
  path = `M-33.5,334.5c12.9,26.1,36,62.7,73,71
	c78.5,17.6,135.6-110.6,209-95c71.9,15.3,105.4,143.8,186,160c51.5,10.3,128.6-105.5,172-121c47.4-16.9,118.9-14.3,153,16
	c46.1,41,33.3,79.5,75,112c37.6,29.3,83.8,25.9,137,22c44.3-3.3,170-12.5,267-102c37.3-34.4,63.9-74.7,106-72
	c22.1,1.4,39.5,14.1,51,25`,
  colorPath = '#260404',
}) {
  const animPath = `M0,393c33.5-55,84.2-120.7,141-117c84.7,5.5,116.1,161.9,188,158c70.3-3.8,93.3-156.2,155-154
	c59.5,2.1,81.3,145.2,132,143c53-2.3,68.1-160.3,118-162c54-1.8,84.2,181.5,135,179c48-2.4,65.3-168.3,102-167
	c38.3,1.3,50.8,183.3,86,184c34.7,0.7,53.5-175.4,89-175c36,0.4,52.6,181.7,83,181c30.6-0.7,37.6-185.9,70-188
	c20.9-1.3,44.4,73.9,67,177`;

  const svgRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'center bottom',
          end: 'center top',
          // markers: true,
          scrub: 0.4,
        },
      })
      .to(pathRef.current, {
        // opacity: 0,
        attr: {
          d: animPath,
        },
      });
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`z-[200] absolute  left-0  pointer-events-none h-[100vh] w-full block ${top}`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1366 768"
      xmlSpace="preserve"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        fill="none"
        stroke={colorPath}
        stroke-width="2"
        stroke-miterlimit="10"
        d={path}
      />
    </svg>
  );
}
export default AnimateSVGShapesOnScroll;

const straithPath = 'M0 768h1366H0z';
const curvePath1 = 'M0 0h1366S792.5 137.5 474.5 137.5C201.5 137.5 0 0 0 0z';

const PortraitcurvePathRight = `M911.2,782c0,0,6.2-788.2-0.3-782.7S784.8,119.4,776.4,247.7
	C768.1,375.5,887.2,487.2,911.2,782z`;
const PortraitcurvePathLeft = `M419.9-26c0,0-4.4,806.5,0.3,801c4.7-5.6,91.6-123,97.6-254.2
	C523.8,390,437.4,275.7,419.9-26z`;

function scrollBase() {
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
