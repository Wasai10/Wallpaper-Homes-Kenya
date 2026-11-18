import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const featuredList = [
  {
    id: 101,
    name: 'Sony WH-1000XM5 Silver',
    description: 'Industry-leading noise cancellation',
    price: '$279.00',
    originalPrice: '$349.00',
    rating: 4.9,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop',
    alt: 'Sony WH-1000XM5 Silver Headphones',
  },
  {
    id: 102,
    name: 'Sennheiser Momentum 4',
    description: 'Audiophile-inspired sound quality',
    price: '$219.00',
    originalPrice: '$289.00',
    rating: 4.8,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=700&auto=format&fit=crop',
    alt: 'Sennheiser Momentum 4 Wireless Headphones',
  },
  {
    id: 103,
    name: 'JBL Live 660NC White',
    description: 'Signature bass & adaptive ambient',
    price: '$129.00',
    originalPrice: '$169.00',
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=700&auto=format&fit=crop',
    alt: 'JBL Live 660NC Over-Ear Headphones',
  },
  {
    id: 104,
    name: 'Audio-Technica M50xBT2',
    description: 'Legendary studio monitor performance',
    price: '$169.00',
    originalPrice: '$210.00',
    rating: 4.9,
    reviews: 260,
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=700&auto=format&fit=crop',
    alt: 'Audio-Technica Professional Studio Headphones',
  },
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="featured-section py-5 bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h2 className="fw-bold section-main-title mb-1">Trending Deals For You!</h2>
            <p className="text-muted small mb-0">Handpicked premium audio gear at unbeatable prices</p>
          </div>
          <Link
            to="/shop"
            className="fw-semibold text-decoration-none d-flex align-items-center gap-1"
            style={{ color: '#003d29' }}
          >
            <span>See All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {featuredList.map((product) => {
            const isLiked = wishlist[product.id];
            return (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <div className="shopcart-product-card h-100 d-flex flex-column">
                  <div className="card-media-box position-relative rounded-4 p-4 d-flex align-items-center justify-content-center">
                    <button
                      type="button"
                      className={`wishlist-heart-btn ${isLiked ? 'liked' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill={isLiked ? '#ef4444' : 'none'}
                        stroke={isLiked ? '#ef4444' : '#4b5563'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>

                    <img
                      src={product.image}
                      alt={product.alt}
                      className="product-hero-image img-fluid"
                      loading="lazy"
                    />
                  </div>

                  <div className="card-info-box pt-3 d-flex flex-column flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between mb-1">
                      <h3 className="product-card-title fw-bold fs-6 mb-0">
                        <Link to="/shop" className="text-dark text-decoration-none">
                          {product.name}
                        </Link>
                      </h3>
                      <span className="product-card-price fw-bold text-dark fs-6 ms-2">
                        {product.price}
                      </span>
                    </div>

                    <p className="product-card-desc text-muted small mb-2 text-truncate">
                      {product.description}
                    </p>

                    <div className="d-flex align-items-center gap-1 mb-3">
                      <div className="rating-stars text-warning small">
                        ★★★★★
                      </div>
                      <span className="text-muted small">({product.reviews})</span>
                    </div>

                    <div className="mt-auto">
                      <Link
                        to="/shop"
                        className="btn btn-outline-cart rounded-pill w-100 fw-semibold text-decoration-none"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
