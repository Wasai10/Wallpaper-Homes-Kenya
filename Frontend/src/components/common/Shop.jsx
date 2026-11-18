import React from 'react';
import Layout from './Layout'; 
import ProductImg from '../../assets/Images/Testphoto.jpg'; 

const Shop = () => {
  return (
    <Layout>
      <div className="container py-5">
        <nav aria-label="breadcrumb" className='py-4'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>

        <div className='row'>
          {/* LEFT SIDEBAR */}
          <div className='col-md-3'>
            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Kids</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Mens</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Brands</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Puma</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Killer</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Levis</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
          <div className='col-md-9'>
            <div className="row pb-5">
              
              
              <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-6 mb-4">
                <div className="product-card card border-0 shadow-sm">
                  <div className="card-img">
                    <img src={ProductImg} alt="Red Check Shirt for Men" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price">
                      $50 <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;