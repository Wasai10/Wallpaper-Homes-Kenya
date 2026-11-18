import React from 'react';
import Header from './Header';
import Hero from './Hero';
import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="site-layout-wrapper d-flex flex-column min-vh-100 bg-white">
      <Header />
      <main className="flex-grow-1">
        {children ? (
          children
        ) : (
          <>
            <Hero />
            <LatestProducts />
            <FeaturedProducts />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
