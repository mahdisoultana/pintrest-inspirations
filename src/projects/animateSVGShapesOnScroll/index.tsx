import { motion } from 'framer-motion';
import CopyRightFooter from '../../component/CopyRightFooter';
import './style.css';
function AnimateSVGShapesOnScroll() {
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
      <section className="m-auto max-w-[1000px] mt-10 grid lg:grid-cols-2  min-h-screen  text-right text-lg mb-10 items-center">
        <div className="w-full h-full relative">
          <SVGPath height="100vh" colorPath="black" />
          <SVGPath
            colorPath="black"
            className="absolute bottom-0 left-0 w-full h-[200px]  "
            curvePath="M -1 768 h 1366 c 0 0 -187 -184 -431 -187 C 499 574 587 716 -1 768 z"
          />
          <SVGPath
            colorPath="black"
            height="100%"
            className={classRight}
            curvePath={PortraitcurvePathRight}
            straightPath={PortraitcurvePathLeft}
          />
          <SVGPath
            colorPath="black"
            height="100%"
            className={classLeft}
            curvePath={PortraitcurvePathLeft}
            straightPath={PortraitcurvePathRight}
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
}) {
  return (
    <svg
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
          <path
            data-anim-to="M0.5,524.5c455.7,322.7,911,315.6,1366-7L1366,173
            C910.7,571.6,455.3,571.6,0,173L0.5,524.5z"
            d="M0.5,246.5c455.7-322.7,911-315.6,1366,7L1366,598
            C910.7,199.3,455.3,199.3,0,598L0.5,246.5z"
          />
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
      <SVGPath height="100vh" />
      {/* bottom */}

      <img
        className="block absolute top-0 left-0 object-cover w-full h-full z-10"
        src={src}
        alt="tea"
      />
      <SVGPath
        className="absolute bottom-0 left-0 w-full h-[400px]  "
        curvePath="M -1 768 h 1366 c 0 0 -187 -184 -431 -187 C 499 574 587 716 -1 768 z"
      />
    </article>
  );
}
function SVGPath({
  colorPath = 'fill-gray-100',
  straightPath = straithPath,
  curvePath = curvePath1,
  height = '100vh',
  className = 'absolute top-0 left-0 w-full  ',
}) {
  return (
    <svg
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
      <path d={curvePath} className={colorPath} />
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
        straightPath="M1366-3.8C1366-3.8-9.5-6.5,0-3.3s209.7,63.1,433.5,67.2
	C656.5,68,851.5,8.3,1366-3.8z"
        curvePath="M0,0c0,0,1375.5-8.5,1366,0s-209.7,166.5-433.5,177.5
      C709.5,188.5,514.5,31.5,0,0z"
      />
      <SVGPath
        straightPath="M1399,774.1c0,0-1408.7,8.8-1398.9,0
	c9.7-8.8,78.8-75.4,201.4-95.6c225-37,446.2,76.5,564,77c261,1,295.7-87.3,442-69C1279.5,695.5,1299.6,767.9,1399,774.1z"
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
      <SVGSperial colorPath={colorPath} />
      <SVGSperial
        top="top-[12rem]"
        path="M-35.5,384.5c4.1-13.5,12.3-32.4,30-44
	c45.2-29.6,95.1,26.6,186,39c121.6,16.6,163.3-66.2,278-33c45.7,13.2,35,25.2,91,45c123.1,43.6,239.8,9,259,3
	c97.9-30.5,103-72.8,167-68c53.4,4,57,33.9,151,61c35.4,10.2,79.1,22.3,135,17c52.5-5,93.1-23.2,118-37"
        colorPath={colorPath}
      />
      <SVGSperial
        top="top-[-5rem]"
        path="M-34.4,363.4c3.5,17.9,10.9,42.9,28,58.6
	c43.9,40.2,96.2-31.6,187.6-44.7c122.3-17.5,160.3,92.2,276.4,52.7c46.2-15.7,36.1-31.7,93-55.8c125-52.9,240.1-3.6,259,4.9
	c96.5,43.2,99.6,98.8,163.9,94.7c53.5-3.4,58.5-42.5,153.6-74.7c35.8-12.1,80-26.5,135.7-17.6c52.2,8.3,92,33.6,116.3,52.4"
        colorPath={colorPath}
      />
      <SVGSperial
        top="top-[-10rem]"
        path="M-35.5,384.5c4.1-13.5,12.3-32.4,30-44
	c45.2-29.6,95.1,26.6,186,39c121.6,16.6,163.3-66.2,278-33c45.7,13.2,35,25.2,91,45c123.1,43.6,239.8,9,259,3
	c97.9-30.5,103-72.8,167-68c53.4,4,57,33.9,151,61c35.4,10.2,79.1,22.3,135,17c52.5-5,93.1-23.2,118-37"
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
  return (
    <svg
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
