import { ReactNode } from 'react';
import { useGsap } from '../hooks';
import Footer from './Footer';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  useGsap((gsap) => {
    const tl = gsap.timeline({ duration: 1 });
    tl.fromTo(
      '.line-nav',
      { height: '0%', opacity: 0 },
      { height: '100%', opacity: 1 },
    )

      .fromTo(
        '.line-main',
        {
          width: '0%',
        },
        {
          width: '100%',
          stagger: 0.4,
          duration: 1,
        },
      )
      .fromTo(
        '.line-main-vertical',
        { height: '0%', opacity: 0 },
        { height: '100%', opacity: 0.5, stagger: 0.4, duration: 1 },
      )
      .fromTo('.nav-container', { x: '-100%' }, { x: '0%' }, '+=.8')
      .fromTo(
        '.card',
        { opacity: 0 },
        { opacity: 1, stagger: 0.4, duration: 1 },
        '+=.8',
      )
      .to(['.line-main-vertical', '.line-main', '.line-nav'], {
        opacity: 0,
      });
    // .fromTo('.footer', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 });
  });
  return (
    <div className="font-Poppins grid  min-h-screen bg-gray-100 ">
      <Nav />

      <main className="h-full w-full m-auto max-w-[1250px] pl-[40px] lg:pr-[30px] pr-[20px] relative  ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
