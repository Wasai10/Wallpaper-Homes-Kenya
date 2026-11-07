import React from 'react'

const FeaturedProducts = () => {
  return (
     <section className='section-2 py-5'>
          <div className='container'>
            <h2>New Arrivals</h2>
    
            <div className='row mt-4'>
              {products.map(({ name, price, previousPrice, alt }) => (
                <div className='col-md-3' key={name}>
                  <div className='product-card card border-0'>
                    <div className='card-img'>
                      <img src={ProductImg} alt={alt} className='w-100' />
                    </div>
                    <div className='card-body pt-3'>
                      <a href="#">{name}</a>
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
  )
}

export default FeaturedProducts

