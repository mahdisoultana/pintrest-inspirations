import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-Poppins grid  min-h-screen bg-gray-100 ">
      <Nav />
      <main className="h-full w-full m-auto max-w-[1250px] pl-[40px] lg:pr-[30px] pr-[20px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
