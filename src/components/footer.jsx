import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer' style={{ backgroundColor: '#414934', marginTop: '40px', color: 'white', overflow: 'hidden' }}>
                <div className="details">
                    <div className="footer-logo">
                        <img src="./images/logo/shallwe_logo.webp" alt="logo"  />
                    </div>
                    <div className="address">
                        <p style={{ paddingTop: '80px', fontSize: '18px' }}>Made to elevate the experience of your intimate moments. Our products are designed for romantic connection, pleasure, well-being and fun.</p>
                        <p style={{ fontSize: '18px', paddingTop: '10px' }}><IoLocationSharp style={{ marginRight: '10px', fontSize: '18px' }} />G-57, Times Trade Center, Opp.Polaris, Vesu Canal Road, Magob, Surat, Gujarat. 395010</p>
                        <p style={{ fontSize: '18px' }}><IoMailOpen style={{ marginRight: '10px', fontSize: '18px' }} />care@shallwe.in</p>
                        <p style={{ fontSize: '18px' }}><FaPhoneAlt style={{ marginRight: '10px', fontSize: '18px' }} />+91 98249 15517</p>
                    </div>

                    <div className='insta-container' >
                        <img src="./images/logo/Instagram-logo-png.png" alt="insta" height={50} />
                        <button >
                            <a href="https://www.instagram.com/shallwe.care/">
                                Follow
                            </a>
                        </button>
                    </div>
                </div>
                <hr style={{ border: '2px solid white', margin: '60px auto 20px', width: '75%', }} />
                <div className="footer-end" style={{ marginBottom: '20px' }}>
                    <div className="footer-end-icons">
                        <FaFacebookF style={{ fontSize: '25px',margin:"0px 7px" }} />
                        <FaInstagram style={{ fontSize: '25px',margin:"0px 7px" }} />
                    </div>
                    <div >
                        <p style={{ color: 'gray', fontSize: '18px', textAlign: 'center' }}>© 2023. All rights reserved @ <span style={{ color: 'white' }}>ShallWe</span>.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
