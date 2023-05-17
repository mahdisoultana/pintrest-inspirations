import { motion } from 'framer-motion';
import CopyRightFooter from '../../component/CopyRightFooter';
import './style.css';
function AnimateSVGShapesOnScroll() {
  return (
    <section className="bg-gray-100 text-black w-[99vw] min-h-screen overflow-hidden    font-Bodoni   flex items-center justify-center flex-col">
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
      <section className="  bg-green-200 w-[100vw] relative">
        <ImgShap src="/tea/3.jpg" />
        <ImgShap
          // src="/tea/.jpg"
          className=" absolute top-1/2 -translate-y-1/2 left-0 w-[100vw] min-h-screen"
        />
        <ImgShap src="/tea/7.jpg" />
      </section>
      <TwoColumnContentStart />

      <Sperial className="w-[100vw] bg-black flex items-center justify-center border" />
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
      {[1, 2, 3, 4].map((i) => (
        <div
          className={`h-[450px] w-full  border border-white/20 bg-gray-900 ${
            i % 2 == 0 && 'lg:mt-[150px]'
          }`}
        ></div>
      ))}
    </section>
  );
}
function TwoColumnContent() {
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
        <img
          className="  w-full h-full block object-cover absolute top-0 left-0"
          src="/tea/5.jpg"
        />
      </div>
    </section>
  );
}
function TwoColumnContentStart() {
  return (
    <div className="bg-black w-[100vw] mt-20">
      <section className="m-auto max-w-[1000px] mt-10 grid lg:grid-cols-2  min-h-screen  text-right text-lg mb-10 items-center">
        <div className="w-full h-full relative">
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
function ImgShap({ className = ' relative ', src = '/tea/2.jpg' }) {
  return (
    <article
      className={`z-10 bg-gray-900 w-full h-screen overflow-hidden  ${className}`}
    >
      <img
        className="block absolute top-0 left-0 object-cover w-full h-full"
        src={src}
        alt="tea"
      />
    </article>
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
      className={` bg-gray-900 relative min-h-screen w-[100vw]  ${className}`}
    >
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
function Sperial({ className = 'bg-gray-900' }) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center border w-[100vw] text-white p-10 ${className}`}
    >
      {' '}
      sperial Here{' '}
    </div>
  );
}
export default AnimateSVGShapesOnScroll;
