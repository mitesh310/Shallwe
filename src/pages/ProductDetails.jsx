import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {  useParams } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Exploreproduct from './Exploreproduct';

import './productdetails.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Whyshallwe from '../components/Whyshallwe';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [imgpath, setimgpath] = useState()
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const navigate= useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once

    const fetchProducts = async () => {
        console.log('initiating get')
        // setLoading(true)
        const res = await fetch(`http://localhost/shallwe/productbyid.php?productId=${productId}`)
        res.json()
            .then((res) => {
                //setting products
                setProduct(res.data[0])

                const img_path = `http://localhost/shallwe/` + res.data[0].photos[0].image_path;
                setimgpath(img_path)

            })
            .catch((err) => {
                console.log("error happned in getting all products", err)
            })
    };

    const addtoCart = () => {

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        // Check if the product already exists in the cart
        const existingProductIndex = existingCart.findIndex(item => item.product.id === product.id);
        if (existingProductIndex !== -1) {
            // If the product already exists, update its quantity
            existingCart[existingProductIndex].quantity += quantity;
        } else {
            // If the product doesn't exist, add it to the cart with the given quantity
            existingCart.push({ product, quantity });
        }
        // Store the updated cart data back into local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setTimeout(() => {
            navigate('/cart')
            window.location.reload();
        }, 1205);
        toast.success(`item added to cart`, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleBuy = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        // Check if the product already exists in the cart
        const existingProductIndex = existingCart.findIndex(item => item.product.id === product.id);
        if (existingProductIndex !== -1) {
            // If the product already exists, update its quantity
            existingCart[existingProductIndex].quantity += quantity;
        } else {
            // If the product doesn't exist, add it to the cart with the given quantity
            existingCart.push({ product, quantity });
        }
        // Store the updated cart data back into local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        // window.location.reload();

        if (!localStorage.getItem('user')) {
            toast.warning(`please login to continue`, {
              position: "top-right",
              autoClose: 1200,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              
              navigate('/login')
            }, 1205);
            return;
          }
          else{
            setTimeout(() => {
              navigate('/shippingdetails')
            }, 1205);
          }
    }
    let minus = () => {
        setQuantity(quantity - 1)
    }
    let plus = () => {
        setQuantity(quantity + 1)
    }
    // hode and show 

    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleSection = (section) => {
        setActiveSection(section === activeSection ? null : section);
    };
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {product ?
                (
                    <div className="container mt-5">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={imgpath} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">

                                        <h5 className="card-title">{product.name} </h5>
                                        <strike>₹ {product.compare_at_price}</strike>
                                        <p className="card-text">&#8377;{product.price}</p>
                                        <ul>
                                            <p  dangerouslySetInnerHTML={{ __html: product.long_desc }} />
                                        </ul>

                                        <h6>Quantity:</h6>
                                        <button className="btn-counter" disabled={quantity === 1} onClick={minus} >-</button>
                                        <button className='counter' style={{fontWeight:"bolder"}}> {quantity}</button>
                                        <button className="btn-counter" onClick={plus} >+</button>
                                        <div className="row">
                                            <div className="col-6">
                                               
                                                    <button onClick={handleBuy} className="buy-btn" >
                                                        Buy now
                                                    </button>
                                                
                                            </div>
                                            <div className="col-6">
                                                <button className="add-btn" onClick={addtoCart}>Add to cart </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 onClick={() => toggleSection('ingredients')} style={{ marginTop: '20px', padding: '10px', border: '1px solid black', borderRadius: "10px", fontSize: '20px', position: 'relative' }}>
                                    Ingredients
                                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        {activeSection === 'ingredients' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                    </span>
                                </h6>
                                {activeSection === 'ingredients' && (
                                    <div className='card'>
                                        <ul style={{ lineHeight: '35px' }}>
                                            <div dangerouslySetInnerHTML={{ __html: product.ingredients }} />
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h6 onClick={() => toggleSection('benefits')} style={{ marginTop: '20px', padding: '10px', border: '1px solid black', borderRadius: "10px", fontSize: '20px', position: 'relative' }}>
                                    Benefits
                                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        {activeSection === 'benefits' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                    </span>
                                </h6>
                                {activeSection === 'benefits' && (
                                    <div className='card'>
                                        <ul style={{ lineHeight: '35px' }}>
                                            {/* <li>MAKE YOUR INTIMACY SO SMOOTH</li>
                                            <li>ALL NATURAL - 100% NATURAL and it Is Sulphate & Paraben free for toxic free intimacy.</li>
                                            <li>NO STICKY RESIDUE - Residue free for a clean feeling, non-greasy and non-sticky.</li>
                                            <li>PH balanced formula - feeling dry or notTailored to a natural PH and kind to your vagina.</li> */}
                                            {/* {product.benefits} */}
                                            {/* dangerouslySetInnerHTML={{ __html: product.benefits }} */}
                                            <div dangerouslySetInnerHTML={{ __html: product.benefits }} />
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h6 onClick={() => toggleSection('howToUse')} style={{ marginTop: '20px', padding: '10px', border: '1px solid black', borderRadius: "10px", fontSize: '20px', position: 'relative' }}>
                                    How To Use
                                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        {activeSection === 'howToUse' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                    </span>
                                </h6>
                                {activeSection === 'howToUse' && (
                                    <div className='card'>
                                        <ul style={{ lineHeight: '35px' }}>
                                            <div dangerouslySetInnerHTML={{ __html: product.how_to_use }} />
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Exploreproduct/>

                    </div >
                )
                :
                (
                    <div>loading</div>
                )
            }
            <div>
                <Whyshallwe />
            </div>
        </>

    )
}

export default ProductDetails