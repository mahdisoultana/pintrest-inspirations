import React from 'react';
import Aside from './Aside';
import Nav from './Nav';
function Header({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen justify-stretch w-[100vw] overflow-hidden relative">
      <div className="w-[270px]  flex-shrink-0 relative">
        <Aside />
      </div>
      <div
        className="w-full min-h-screen relative"
        style={{ display: 'grid', gridTemplateRows: 'min-content 1fr' }}
      >
        <Nav />
        {children}
      </div>
    </section>
  );
}

export default Header;
