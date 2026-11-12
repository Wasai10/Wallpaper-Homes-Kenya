import React from 'react';
import ProductImg from '../../assets/Images/Photoo.jpeg';

const products = [
  {
    name: 'Soft Texture Wallpaper',
    price: 'KSh 2,100',
    previousPrice: 'KSh 2,400',
    alt: 'Soft Texture Wallpaper',
  },
  {
    name: 'Modern Floral Wallpaper',
    price: 'KSh 1,950',
    previousPrice: 'KSh 2,250',
    alt: 'Modern Floral Wallpaper',
  },
  {
    name: 'Classic Geometric Wallpaper',
    price: 'KSh 2,300',
    previousPrice: 'KSh 2,700',
    alt: 'Classic Geometric Wallpaper',
  },
  {
    name: 'Luxury Marble Wallpaper',
    price: 'KSh 2,600',
    previousPrice: 'KSh 2,900',
    alt: 'Luxury Marble Wallpaper',
  },
];

const FeaturedProducts = () => {
  return (
    <section className='section-2 py-5'>
      <div className='container'>
        <h2>Featured Products</h2>

        <div className='row mt-4'>
          {products.map(({ name, price, previousPrice, alt }) => (
            <div className='col-md-3 col-6' key={name}>
              <div className='product-card card border-0'>
                <div className='card-img'>
                  <img src={ProductImg} alt={alt} className='w-100' />
                </div>
                <div className='card-body pt-3'>
                  <a href='#'>{name}</a>
                  <div className='price'>
                    {price} <span className='text-decoration-line-through'>{previousPrice}</span>
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

export default FeaturedProducts;
