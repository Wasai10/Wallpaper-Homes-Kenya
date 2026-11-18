import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds with Case',
    description: 'Noise isolation & deep bass',
    price: '$49.00',
    originalPrice: '$89.00',
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=700&auto=format&fit=crop',
    alt: 'Black Wireless Earbuds in Charging Case',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Air Max Pink Edition',
    description: 'High-fidelity spatial audio',
    price: '$189.00',
    originalPrice: '$249.00',
    rating: 4.9,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=700&auto=format&fit=crop',
    alt: 'Rose Gold & Pink Over-Ear Headphones',
    badge: 'Trending',
  },
  {
    id: 3,
    name: 'Bose QuietComfort Matte Black',
    description: 'World-class active noise canceling',
    price: '$249.00',
    originalPrice: '$329.00',
    rating: 5.0,
    reviews: 340,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=700&auto=format&fit=crop',
    alt: 'Sleek Matte Black Noise-Canceling Headphones',
    badge: 'Best Seller',
  },
  {
    id: 4,
    name: 'Beats Studio Pro Vibrant Red',
    description: 'Lossless audio & 40hr battery',
    price: '$179.00',
    originalPrice: '$220.00',
    rating: 4.7,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=700&auto=format&fit=crop',
    alt: 'Vibrant Red Over-Ear Headphones with Audio Cable',
    badge: 'Deal',
  },
];

const filterOptions = [
  'Headphone Type',
  'Price',
  'Review',
  'Color',
  'Material',
  'Offer',
];

const LatestProducts = () => {
  const [wishlist, setWishlist] = useState({});
  const [activeFilter, setActiveFilter] = useState('');
  const [sortBy, setSortBy] = useState('Recommended');

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="products-section py-4">
      <div className="container">
        {/* Filter Pills Bar */}
        <div className="filter-pill-bar d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4 py-2">
          {/* Left Filter Buttons */}
          <div className="d-flex flex-wrap align-items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(activeFilter === filter ? '' : filter)}
              >
                <span>{filter}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-chevron-down ms-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            ))}

            {/* All Filters Pill */}
            <button type="button" className="filter-pill filter-pill-all">
              <span>All Filters</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ms-1"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </button>
          </div>

          {/* Right Sort By Dropdown */}
          <div className="dropdown">
            <button
              type="button"
              className="filter-pill filter-pill-sort d-flex align-items-center gap-1"
            >
              <span className="text-muted small">Sort by</span>
              <span className="fw-semibold text-dark">{sortBy}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-chevron-down ms-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="section-header mb-4">
          <h2 className="fw-bold section-main-title">Headphones For You!</h2>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {defaultProducts.map((product) => {
            const isLiked = wishlist[product.id];
            return (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <div className="shopcart-product-card h-100 d-flex flex-column">
                  {/* Card Image Area with Light Gray Background */}
                  <div className="card-media-box position-relative rounded-4 p-4 d-flex align-items-center justify-content-center">
                    {/* Floating Heart / Wishlist Button */}
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

                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="product-hero-image img-fluid"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
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

                    {/* Rating stars & review count */}
                    <div className="d-flex align-items-center gap-1 mb-3">
                      <div className="rating-stars text-warning small">
                        ★★★★★
                      </div>
                      <span className="text-muted small">({product.reviews})</span>
                    </div>

                    {/* Add to Cart Button */}
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

export default LatestProducts;
