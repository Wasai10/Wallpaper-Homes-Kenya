import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section py-3 py-md-4">
      <div className="container">
        <div className="hero-banner rounded-4 overflow-hidden position-relative">
          <div className="row align-items-center g-0">
            {/* Left Content Column */}
            <div className="col-12 col-md-7 col-lg-6 p-4 p-md-5 z-2">
              <div className="hero-text-content ps-md-3">
                <h1 className="hero-heading fw-bold mb-4">
                  Grab Upto 50% Off On
                  <br />
                  Selected Headphone
                </h1>

                <Link
                  to="/shop"
                  className="btn btn-hero rounded-pill fw-semibold px-4 py-2 px-md-5 py-md-3 text-white text-decoration-none d-inline-block"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="col-12 col-md-5 col-lg-6 text-center text-md-end position-relative">
              <div className="hero-image-wrapper pe-md-4 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
                  alt="Young woman listening to music with headphones"
                  className="hero-model-img img-fluid"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to local image if offline
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
