
import React from 'react';
import ProductImg from '../../assets/Images/Testphoto.jpg';

const products = [
  {
    name: 'Textured Wallpaper',
    price: 'KSh 1,800',
    previousPrice: 'KSh 2,000',
    alt: 'Textured Wallpaper',
  },
  {
    name: 'Floral Wallpaper',
    price: 'KSh 1,500',
    previousPrice: 'KSh 1,800',
    alt: 'Floral Wallpaper',
  },
  {
    name: 'Geometric Wallpaper',
    price: 'KSh 2,000',
    previousPrice: 'KSh 2,300',
    alt: 'Geometric Wallpaper',
  },
  {
    name: 'Marble Wallpaper',
    price: 'KSh 2,200',
    previousPrice: 'KSh 2,500',
    alt: 'Marble Wallpaper',
  },
];

const LatestProducts = () => {
  return (
    <section className="section-2 py-5">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="row mt-4">
          {products.map(({ name, price, previousPrice, alt }) => (
            <div className="col-md-3, col-6" key={name}>
              <div className="product-card card border-0">
                <div className="card-img">
                  <img src={ProductImg} alt={alt} className="w-100" />
                </div>
                <div className="card-body pt-3">
                  <a href="#">{name}</a>
                  <div className="price">
                    {price} <span className="text-decoration-line-through">{previousPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
