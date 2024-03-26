import React from 'react'
import './whyshallwe.css'
import '../pages/Home/marquee.css'
const Whyshallwe = () => {
    return (
        <>
            <div className="allpr">

                    <h2  className='' style={{ fontWeight: 'bold' }}>Guaranteed Discreet Packaging</h2>
                <div className='discreet-container' >
                  
                        <div className="discreet-details">
                            <div className="disimg">
                                <img src="../images/banner/main-img.jpg"  alt="main-img" />
                            </div>
                            <div className="discreet-details-txt">
                                <p className='text-center' style={{ fontSize: '15px' }}> TRUSTED BY 25,000+ CUSTOMERS</p>
                                <h1 className='text-center' style={{ fontWeight: "bold" }}>100% Discreet</h1>
                                <p style={{margin:"33px 0px"}}>We respect your privacy. Our products are 100% discreetly packaged and delivered at your doorstep so that you can shop while maintaining your personal space and interest. 'Shall We' won't be mentioned in any kind of outer packaging, not even in the payment receipt. We are committed to discreet packaging for your comfort, privacy, and confidence.</p>
                                <a href="/" className='rmore'>Read More</a>
                            </div>
                        </div>
                </div>
                <marquee>
                    <div className="marquee-container">
                        <div className="marquee-ele">rated 4.7 by 25000+ by happy customers </div>
                        <div className="marquee-ele">rated 4.7 by 25000+ by happy customers </div>
                        <div className="marquee-ele">rated 4.7 by 25000+ by happy customers </div>
                    </div>
                </marquee>

                <div>
                    <h2 className='text-center mt-5' style={{ fontWeight: 'bold' }}>Why Shall We?</h2>
                    


                        <div className='row pb-5' style={{width:"80vw"}}>
                            <div className="col-3 text-center">
                                <img src="../images/icons/service8.png" alt="" width={150} />
                                <h6>Discreet Delivery</h6>
                            </div>
                            <div className="col-3 text-center">
                                <img src="../images/icons/service6.png" alt="" width={150} />
                                <h6>Safe To Use</h6>
                            </div>
                            <div className="col-3 text-center">
                                <img src="../images/icons/service9.png" alt="" width={150} />
                                <h6>Quality Assurance</h6>
                            </div>
                            <div className="col-3 text-center">
                                <img src="../images/icons/service7.png" alt="" width={150} />
                                <h6>Made In India</h6>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyshallwe