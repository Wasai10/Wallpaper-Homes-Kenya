import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/Images/Logo white.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderOneImg from '../../assets/Images/banner-1.jpeg';
import SliderTwoImg from '../../assets/Images/banner-2.jpeg';
import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className='shadow'>
        <div className='top-strip text-center py-3'>
          <span className='text-white'>Your wallpaper guru</span>
        </div>

        <div className='container'>
          <Navbar expand="lg" className="bg-body-tertiary">

            <Navbar.Brand href="#">
              <img src={logo} alt="Wallpaper Homes Kenya Logo" width="170" height="100" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Soft</Nav.Link>
                <Nav.Link href="#action2">Textured</Nav.Link>
                <Nav.Link href="#action3">Patterned</Nav.Link>
              </Nav>

              {/* Profile and Shopping Bag Icons */}
              <div className='nav-right d-flex align-items-center'>

                <a href="" className='ms-3' aria-label="Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>
                </a>

                <a href="" className='ms-3' aria-label="Shopping bag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="28"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                  </svg>
                </a>

              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      {/* Homepage Slider */}
      <section className='section-1'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="content"
              style={{ backgroundImage: `url(${SliderOneImg})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="content"
              style={{ backgroundImage: `url(${SliderTwoImg})` }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Latest Products */}
      <LatestProducts />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Footer */}
      <footer className='py-5 text-white'>
        <div className='container py-5'>
          <div className='row mb-5'>

            <div className='col-md-3'>
              <img
                src={logoBlack}
                alt="Wallpaper Homes Kenya Logo"
                width={150}
              />
              <div className='pt-3 pe-5'>Your wallpaper guru</div>
            </div>

            <div className='col-md-3'>
              <h2 className='mb-3'>Categories</h2>
              <ul>
                <li>
                  <a href=''>Textured</a>
                </li>
                <li>
                  <a href=''>Flowered</a>
                </li>
                <li>
                  <a href=''>Soft</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h2 className='mb-3'>Quick Links</h2>
              <ul>
                <li>
                  <a href=''>Login</a>
                </li>
                <li>
                  <a href=''>Register</a>
                </li>
                <li>
                  <a href=''>Soft</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'><h2 className='mb-3'>Get in touch</h2>
              <ul>
                <li>
                  <a href=''>0113738019</a>
                </li>
                <li>
                  <a href=''>Tiktok</a>
                </li>
                <li>
                  <a href=''>Instagram</a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className='row spotlight py-5'>
            
            {/* Free Delivery */}
            <div className='col-md-4'>
              <div className='d-flex flex-column align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-truck mb-2" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                <h3 className='ps-2'>Free Delivery</h3>
              </div>
            </div>

            {/* Money back guarantee */}
            <div className='col-md-4'>
              <div className='d-flex flex-column align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cash mb-2" viewBox="0 0 16 16">
                  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
                </svg>
                <h3 className='ps-2'>Money back guarantee</h3>
              </div>
            </div>

            {/* Secure payments */}
            <div className='col-md-4'>
              <div className='d-flex flex-column align-items-center'>
                {/* Added Credit Card Icon Here */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-credit-card-2-back mb-2" viewBox="0 0 16 16">
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-.5z"/>
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                </svg>
                <h3 >Secure payments</h3>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Home