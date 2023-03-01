import { useGsap } from '../../component/hooks';
import Freelancer from './Freelancer';
import Handle from './Handle';
import Nav from './Nav';
import Officer from './Officer';
import Particle from './Particle';
import { useMousePosition } from './hooks';

function SplitPage() {
  const { x, active, setActive } = useMousePosition();
  useGsap((gsap) => {
    const tl = gsap.timeline({ duration: 1 });
    tl.from('.officier-container', {
      x: '100%',
      borderColor: '#0000',
      duration: 1.5,
    })
      .from(
        '.freelancer-container',
        {
          x: '-100%',
          duration: 2,
        },
        '+=1',
      )
      .from('.officier-container .officier', {
        opacity: 0,
        x: '20%',
        duration: 2,
      })
      .from('.officier-container h2', {
        opacity: 0,
        x: '-20%',
      })

      .from('.freelancer-container .freelancer', {
        opacity: 0,
        x: '-20%',
        duration: 2,
      })
      .from('.freelancer-container h2', {
        opacity: 0,
        x: '20%',
      })
      .from(
        '.handle',
        {
          opacity: 0,
          y: '-5%',
          rotate: '360deg',
          duration: 1,
          ease: 'expo.out',
        },
        '+=1',
      )
      .from(
        '.nav',
        {
          y: '-100%',
          duration: 1,
          ease: 'power4.out',
        },
        '+=.5',
      )
      .from(
        '.particle-container',
        {
          y: -5,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        },
        '+=.5',
      );
  });
  return (
    <section className=" min-h-screen relative overflow-hidden">
      <Nav />
      <Officer active={active} />
      <Freelancer x={x} active={active} />
      <Handle active={active} setActive={setActive} />
      <Particle active={active} />
    </section>
  );
}

export default SplitPage;
