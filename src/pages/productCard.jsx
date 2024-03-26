import React from 'react'
import './products.css';
import { TiStarFullOutline, TiStarHalf } from "react-icons/ti";

const productCard = ({ product }) => {

    //defining path for each image 
    const img_path = `http://localhost/shallwe/` + product.photos[0].image_path;
    return (
        <>

            <div className="productcard" >

                <div className="card text-center" style={{ border: "2px solid red" }}>
                    <img className='productimg' src={img_path} style={{ border: '2px solid transparent 7px', padding: '15px' }} alt={img_path} />
                    <div className="discount" style={!product.tag ? { display: "none" } : { display: "block" }}> {product.tag}</div>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <div className="ratings">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarHalf />
                            <b style={{ color: "black" }}> 4.3 </b>
                        </div>
                        <div className="product-details">

                            <p className="card-text" style={{ margin: '0px 3px', textDecoration: "none", color: "black" }}>{product.short_desc.split(0, 5) + "..."}
                                <span style={{ fontWeight: "bold" }}>read more</span>
                            </p>
                        </div>

                        <div className='price'>
                            <span style={{ color: 'gray', fontWeight: "lighter" }}>&#8377; <strike>  {product.compare_at_price}</strike></span>
                            <p className="card-text" style={{ fontWeight: "bold", margin: "0px 7px", fontSize: '23px' }}>  &#8377;{product.price} </p>

                        </div>

                        <button className="buynow-btn" >
                            Buy now
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default productCard