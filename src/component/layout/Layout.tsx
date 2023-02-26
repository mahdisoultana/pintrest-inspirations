import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';
function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="font-Poppins grid bg-gray-900 min-h-screen"
      style={{ gridTemplateColumns: '60px 1fr 60px' }}
    >
      <Nav />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
