import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer text-white pt-5 pb-4">
      <div className="container">
        {/* Top 4 Columns */}
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4C19 4 23 4.5 24.5 8C26 11.5 23.5 14 20 14.5C18.5 12 18 8 19 4Z" fill="#10B981" />
                <path d="M17 9C17 9 13.5 10 12.5 13C11.5 16 13.5 18 16 18C17 16 17.5 12.5 17 9Z" fill="#F97316" />
                <path d="M8 12H28L25.5 23H10.5L8 12Z" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 8H7.5L8 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="27" r="2.2" fill="#ffffff" />
                <circle cx="24" cy="27" r="2.2" fill="#ffffff" />
              </svg>
              <span className="brand-title fw-bold fs-4 text-white">Shopcart</span>
            </div>
            <p className="footer-bio text-white-50 pe-lg-3 small">
              Your one-stop destination for high-fidelity audio gear and stylish home decor. Quality delivered to your doorstep.
            </p>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="footer-title fw-bold mb-3 text-white">Categories</h5>
            <ul className="footer-links list-unstyled mb-0">
              <li className="mb-2"><Link to="/shop" className="footer-link">Wireless Headphones</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Earbuds & Pods</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Noise Canceling</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Sports & Audio</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="footer-title fw-bold mb-3 text-white">Quick Links</h5>
            <ul className="footer-links list-unstyled mb-0">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Shop Collection</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Deals & Offers</Link></li>
              <li className="mb-2"><Link to="/shop" className="footer-link">Delivery Information</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="footer-title fw-bold mb-3 text-white">Get In Touch</h5>
            <ul className="footer-links list-unstyled mb-0">
              <li className="mb-2 text-white-50">
                <span className="text-white fw-medium">Phone: </span>+001234567890
              </li>
              <li className="mb-2 text-white-50">
                <span className="text-white fw-medium">Email: </span>support@shopcart.com
              </li>
              <li className="mb-2 text-white-50">
                <span className="text-white fw-medium">Location: </span>Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Highlights / Spotlight */}
        <div className="row spotlight py-4 my-2 border-top border-bottom border-white-10">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="spotlight-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-white">Free Delivery</h6>
                <small className="text-white-50">On all orders over $50</small>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="spotlight-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-white">Money Back Guarantee</h6>
                <small className="text-white-50">30-day hassle-free returns</small>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="spotlight-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                </svg>
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-white">Secure Payments</h6>
                <small className="text-white-50">100% encrypted & protected</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-3 text-white-50 small">
          <p className="mb-0">&copy; {new Date().getFullYear()} Shopcart Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
