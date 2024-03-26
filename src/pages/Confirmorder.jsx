import React, { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './confirmorder.css'
const Confirmorder = () => {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    console.log(cartItems)
    const [agreePolicy, setAgreePolicy] = useState(false);
    const [cod, setCod] = useState(false);
    const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const location = useLocation();
    const { formData } = location.state;
    const navigate = useNavigate()
    const handleCheckboxChange = () => {
        setAgreePolicy(!agreePolicy);
    };
    const handlecod = () => {
        setCod(!cod);
    };


    const products = [];
    cartItems.map((item) => {
        return (

            products.push({
                "productId": item.product.id,
                "quantity": item.quantity,
                "price": parseInt(item.product.price)
            })
        )
    })
    console.log("final products cart is", products)

    const postbody = {
        "user_id": localStorage.getItem('userid'),
        "is_offer": "0",
        "coupon_code": "",
        "sub_total": totalPrice,
        "shipping_amount": 40,
        "tax": "",
        "total": totalPrice + 40,
        "payment_type": "COD",
        "full_name": formData.name,
        "country": "india",
        "address": formData.address,
        "state": formData.state,
        "city": formData.city,
        "pin_code": formData.pincode,
        "mobileNumber": formData.mobile,
        "products": products


    }
    console.log(postbody)
    const handlePay = async () => {
        if (!cod || !agreePolicy) {
            console.log(true)
            toast.error(`please check the checkbox`, {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        console.log('payment started')

        //temporaily disabled confimr order api for test purpose

        const response = await fetch('http://localhost/shallwe/checkout.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postbody),
        });
        console.log(response.json)
        response.json()
            .then(data => {
                console.log(data)
                toast.success(`Order placed sucessfully`, {
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
                    navigate('/myorder')
                }, 1205);
                localStorage.removeItem('cart')
            })
            .catch((err) => {
                console.log("some error has occured in register", err)
            })

            //api call for payment

            const paybody= {
                "merchant_id":"2104271",
                "language":"EN",
                "amount":"1",
                "currency":"INR",
                "redirect_url":"http://youdomain.com/payment-response.php",
                "cancel_url":"http://youdomain.com/payment-cancel.php",
                "billing_name":"Urvashi",
                "billing_address":"Room no 1101, near Railway station Ambad",
                "billing_state":"MP",
                "billing_zip":"425001",
                "billing_country":"India",
                "billing_tel":"9876543210",
                "billing_email":"test@gmail.com"
            }
            const pay_res = await fetch('http://localhost/shallwe/payment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paybody),
            });
            console.log(pay_res)
            pay_res.json()
                .then(data => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log("some error has occured in register", err)
                })

    }
    const getImagePath = (item) => {

        const img_path = `http://localhost/shallwe/` + item.product.photos[0].image_path;

        return img_path
    }
    return (
        <div className='confirm-page'>
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
            <div >
                <h2 className='heading'>Confirm Order</h2>
                <div className="detail-section">
                    <div className="user-details">
                        <h3>Shipping details</h3>
                        <div className="field">
                            <p className='' >Full Name:</p>
                            <p className=''>{formData.name}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>Email:</p>
                            <p className=''>{formData.email}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>Mobile No:</p>
                            <p className=''>{formData.mobile}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>Shipping Address:</p>
                            <p className=''>{formData.address}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>Pincode:</p>
                            <p className=''>{formData.pincode}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>City:</p>
                            <p className=''>{formData.city}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>State:</p>
                            <p className=''>{formData.state}</p>
                        </div>
                        <div className="field">
                            <p className='' style={{ fontSize: '20px' }}>Country:</p>
                            <p className=''>India</p>
                        </div>
                    </div>

                    <div className="cart-details">
                        {cartItems.map((item) => (
                            <div key={item.product.id} className="cart-items" style={{ display: "flex" }}>
                                <div>
                                    <img src={getImagePath(item)} alt={item.product.name} width={200} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.product.name}</h3>
                                    <p>Price: ₹{item.product.price}</p>
                                    Qunatity:  <b>{item.quantity}</b>
                                    <button style={{margin:"0px 13px" ,padding: "3px 13px", borderRadius: "7px",background:"#3577f0",border:"none" }}><Link to={'/cart'} style={{ textDecoration: "none", color: "white" }}>edit</Link></button>
                                </div>
                            </div>
                        ))}
                        <h4>Shipping Charges: ₹40</h4>
                        <h4>Grand Total: ₹{parseInt(totalPrice.toFixed(2)) + 40}</h4>
                    </div>
                </div>


                <div className='checkboxes' >
                    <div className='checkbox' >
                        <input type="checkbox" className='tick' checked={agreePolicy} onChange={handleCheckboxChange} />
                        <label htmlFor="agree-policy">I have checked the above details</label>
                    </div>
                    <div className='checkbox' >
                        <label className="checkbox-container">
                            <input type="checkbox" className='tick' checked={cod} onChange={handlecod} />
                            <span className="checkmark"></span>
                            <span className="label-text">The mode of payment is Cash on Delivery</span>
                        </label>
                    </div>
                </div>
                <button type="submit" className='submit-btn'  onClick={handlePay}>Proceed To Pay</button>
            </div>
        </div>
    )
}

export default Confirmorder