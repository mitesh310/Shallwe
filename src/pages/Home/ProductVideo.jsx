import React, { useState } from 'react'
import './productvideo.css'
import Modal from './Modal'
export default function ProductVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen)
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ margin: "23px 0px" }} >People Are Loving Our Products!</h1>
        <div className="row videos" style={{margin:"2rem 0px"}}>
          <div className="col-3">
            <a href="https://www.instagram.com/shallwe.care/">
              <img src="./images/product/people1.gif" className='video' alt=""  onClick={openModal}/>
              {isOpen && <Modal videoUrl='./images/videos/Hetvi_1697640020.mp4' onClose={closeModal}/>}
              
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.instagram.com/shallwe.care">
              <img src="./images/product/people2.gif" className='video' alt="" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.instagram.com/shallwe.care">
              <img src="./images/product/people3.gif" className='video' alt="" />
            </a>
          </div>
          <div className="col-3">
            <a href="https://www.instagram.com/shallwe.care">
              <img src="./images/product/people4.gif" className='video' alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
