import React from 'react'
import logoBlack from "../../assets/Images/Logo white.png";
const Footer = () => {
  return (
   <footer className='py-5 text-white'>
           <div className='container py-5'>
             <div className='row mb-5'>
   
               <div className='col-md-3 pb-3'>
                 <img
                   src={logoBlack}
                   alt="Wallpaper Homes Kenya Logo"
                   width={150}
                 />
                 <div className='pt-3 pe-5'>Your wallpaper guru</div>
               </div>
   
               <div className='col-md-3'>
                 <h2 className='mb-3'>Categories</h2>
                 <ul>
                   <li>
                     <a href=''>Textured</a>
                   </li>
                   <li>
                     <a href=''>Flowered</a>
                   </li>
                   <li>
                     <a href=''>Soft</a>
                   </li>
                 </ul>
               </div>
   
               <div className='col-md-3'>
                 <h2 className='mb-3'>Quick Links</h2>
                 <ul>
                   <li>
                     <a href=''>Login</a>
                   </li>
                   <li>
                     <a href=''>Register</a>
                   </li>
                   <li>
                     <a href=''>Soft</a>
                   </li>
                 </ul>
               </div>
   
               <div className='col-md-3'><h2 className='mb-3'>Get in touch</h2>
                 <ul>
                   <li>
                     <a href=''>0113738019</a>
                   </li>
                   <li>
                     <a href=''>Tiktok</a>
                   </li>
                   <li>
                     <a href=''>Instagram</a>
                   </li>
                 </ul>
               </div>
   
             </div>
             
             <div className='row spotlight py-5'>
               
               {/* Free Delivery */}
               <div className='col-md-4'>
                 <div className='d-flex flex-column align-items-center py-3'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-truck mb-2" viewBox="0 0 16 16">
                     <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                   </svg>
                   <h3 className='ps-2'>Free Delivery</h3>
                 </div>
               </div>
   
               {/* Money back guarantee */}
               <div className='col-md-4'>
                 <div className='d-flex flex-column align-items-center py-3'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cash mb-2" viewBox="0 0 16 16">
                     <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                     <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
                   </svg>
                   <h3 className='ps-2'>Money back guarantee</h3>
                 </div>
               </div>
   
               {/* Secure payments */}
               <div className='col-md-4'>
                 <div className='d-flex flex-column align-items-center py-3'>
                   {/* Added Credit Card Icon Here */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-credit-card-2-back mb-2" viewBox="0 0 16 16">
                     <path d="M11 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-.5z"/>
                     <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                   </svg>
                   <h3 >Secure payments</h3>
                 </div>
               </div>
   
             </div>
             <div className='row'>
             <div className='col-md-12 text-center pt-5'>
               <p>&copy; 2024 All Rights Reserved</p>
             </div>
             </div>
           </div>
         </footer>
  )
}

export default Footer
