import React from 'react'
import Header from './Header';
import Hero from './Hero';
import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <LatestProducts />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default Layout
