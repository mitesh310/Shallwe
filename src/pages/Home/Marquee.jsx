import React from 'react'
import './marquee.css'
export default function Marquee() {
    return (
        <>
        <div className="marquee-slider">

            <marquee>
                <div className='marquee-container'>
                    <div className=" marquee-ele">FREE DELIVERY ABOVR 599</div>
                    <div className=" marquee-ele"> DISCREETDELIVERY</div>
                    <div className=" marquee-ele">COD AVAILABLE</div>
                </div>
            </marquee>
        </div>
        </>
    )
}
