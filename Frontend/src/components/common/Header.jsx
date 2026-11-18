import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="site-header shadow-sm bg-white">
      {/* Top Notification Strip */}
      <div className="top-strip py-2">
        <div className="container d-flex flex-wrap align-items-center justify-content-between text-white small">
          {/* Phone */}
          <div className="d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <span className="fw-medium">+001234567890</span>
          </div>

          {/* Promo Offer */}
          <div className="d-none d-md-flex align-items-center text-center">
            <span>
              Get 50% Off on Selected Items &nbsp;|&nbsp;{' '}
              <Link to="/shop" className="text-white fw-bold text-decoration-underline ms-1">
                Shop Now
              </Link>
            </span>
          </div>

          {/* Language & Location Selectors */}
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <span className="dropdown-toggle cursor-pointer" role="button">
                Eng
              </span>
            </div>
            <div className="dropdown">
              <span className="dropdown-toggle cursor-pointer" role="button">
                Location
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <Navbar expand="lg" className="py-3 bg-white">
          {/* Brand Logo - Shopcart design */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 me-lg-4">
            <div className="logo-cart-icon">
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sprout Leaf */}
                <path
                  d="M19 4C19 4 23 4.5 24.5 8C26 11.5 23.5 14 20 14.5C18.5 12 18 8 19 4Z"
                  fill="#10B981"
                />
                <path
                  d="M17 9C17 9 13.5 10 12.5 13C11.5 16 13.5 18 16 18C17 16 17.5 12.5 17 9Z"
                  fill="#F97316"
                />
                {/* Cart Body */}
                <path
                  d="M8 12H28L25.5 23H10.5L8 12Z"
                  stroke="#003d29"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Cart Handle */}
                <path
                  d="M4 8H7.5L8 12"
                  stroke="#003d29"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Wheels */}
                <circle cx="12" cy="27" r="2.2" fill="#003d29" />
                <circle cx="24" cy="27" r="2.2" fill="#003d29" />
              </svg>
            </div>
            <span className="brand-title fw-bolder fs-4" style={{ color: '#003d29', letterSpacing: '-0.5px' }}>
              Shopcart
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" />

          <Navbar.Collapse id="main-navbar-nav">
            {/* Nav Menu Links */}
            <Nav className="me-auto my-2 my-lg-0 align-items-lg-center">
              <NavDropdown title="Categories" id="categories-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/shop">Soft</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">Textured</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">Patterned</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/shop">All Categories</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/shop" className="nav-link-custom">
                Deals
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link-custom">
                What's New
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link-custom">
                Delivery
              </Nav.Link>
            </Nav>

            {/* Search Pill Input */}
            <div className="header-search-box mx-lg-3 my-2 my-lg-0">
              <div className="search-pill-wrapper d-flex align-items-center">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="search-btn" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bi bi-search"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Items: Account & Cart */}
            <div className="d-flex align-items-center gap-4 ms-lg-2">
              <Link to="/shop" className="nav-action-item d-flex align-items-center gap-2 text-decoration-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="fw-semibold text-dark">Account</span>
              </Link>

              <Link to="/shop" className="nav-action-item d-flex align-items-center gap-2 text-decoration-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="fw-semibold text-dark">Cart</span>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
