import React from 'react';
import Layout from './Layout'; // Make sure to import Layout!

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
              <div className='col-md-3'>
             <div className='card shadow border-0'>
              <div className='card-body p-4'>
               <h3>Categories</h3>
              </div>
             </div>
              </div>
              <div className='col-md-8'>

              </div>

            </div>
            
          </div>
    </Layout>
  );
};

export default Shop;