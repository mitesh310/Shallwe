import React from 'react'
import './productslider.css'

export default function ProductSlider() {
  return (
    <>
      <div className="products mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 text-center"><h6 style={{fontSize:'36px' }}>Explore our Products</h6></div>
          <div className="col-4">
              <div className="card text-center"  style={{border : 'none'}}>
                <img src="./images/product/pro1.jpg" style={{borderRadius : '10px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Oil</h5>
                  <p className="card-text">This Is The Best Product To Buy Right Now</p>
                  <p className="card-text"> <span style={{color: 'gray'}}>&#8377; <strike> 999</strike></span> &#8377; 999 </p>
                  <a href="/" className="btn btn-buy">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card text-center"  style={{border : 'none'}}>
                <img src="./images/product/pro2.jpg" style={{borderRadius : '10px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Oil</h5>
                  <p className="card-text">This Is The Best Product To Buy Right Now</p>
                  <p className="card-text"> <span style={{color: 'gray'}}>&#8377; <strike>  999</strike></span> &#8377; 999 </p>
                  <a href="/" className="btn btn-buy">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card text-center"  style={{border : 'none'}}>
                <img src="./images/product/pro3.jpg" style={{borderRadius : '10px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Oil</h5>
                  <p className="card-text">This Is The Best Product To Buy Right Now</p>
                  <p className="card-text"> <span style={{color: 'gray'}}>&#8377; <strike>  999</strike></span> &#8377; 999 </p>
                  <a href="/" className="btn btn-buy">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4
            ">
              <button className="btn btn-all">View All Product</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
