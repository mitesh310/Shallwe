import React from 'react'
import './about.css'
import Exploreproduct from './Exploreproduct'
import Word from './Word';


export default function About() {
  const words = ["Love", "Play"];
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h6>About Smile <br /> Makers</h6>
            </div>
            <div className="col-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis odio officia! Consequatur, fuga vitae minus alias sit quibusdam molestias.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit qui eaque, magni facere consequatur possimus soluta sapiente dolorem minima eius?
              </p>
              <a href="/">Have You Checked our FAQs?</a>
            </div>
          </div>
        </div>
      </div>
      <div className="play mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className='text-center mb-5'>how we play </h2>
            </div>
            <div className="col-4">
              <div className="play-list">
                <h6 className='title'>Openness </h6>
                <h6>Inclusivity</h6>
                <h6>Empowerment</h6>
                <h6>Quality</h6>
              </div>
            </div>
            <div className="col-4">
              <h5 className='mb-3' >Openness is: Feelin' good about getting some.</h5>
              <p>we are here to help you nevigate sex, health and self-love...like the sex eduction you wished you head, or probably should've.
                better late then never, right?
              </p>
            </div>
            <div className="col-4">
              <center>
                <img className='text-center' width={'65%'} src="./images/about/images.jpg" alt="images.jpg" />
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="animated-container">
        <div className="anim-logo">
          <img src="./images/logo/shallwe_logo.webp" alt="" />
        </div>
        <div className="anim-words">
          <Word words={words} />
        </div>
      </div>
      <Exploreproduct />

    </>
  )
}
