import React from 'react'
import './pleasure.css'

export default function Pleasure() {
    return (
        <>
            <div className="pleasure" >
                <div className="pleasure-container">
                    <div className="pleasure-img">
                        <img src="./images/about/about-02.jpg"  alt="..." />
                    </div>
                    <div className="pleasure-details">
                        <h2 className="">Pleasure, <br /> Connection, <br />Intimacy.</h2>
                        <h5 style={{margin:"3rem 0px"}}>To break the taboos of intimate wellness!</h5>
                        <p className=" card-text card-text2">
                            Willing to explore new horizons of intimacy? We are here to fulfil your wish! At Shall We, our mission is to break
                            the taboos of sexual hygiene and talk out loud about intimate wellness. Along with our commitment to delivering quality products, we are also
                            committed to promoting open dialogue and creating a culture of acceptance. Let’s start a wellness revolution!
                        </p>
                        <button className="btn btn-about">About Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}
