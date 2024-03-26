import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { MdDelete } from "react-icons/md";
import './cart.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate=useNavigate()

  const handlePlaceorder=()=>{
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
    }
    else{
      setTimeout(() => {
        navigate('/shippingdetails')
      }, 1205);
    }
  }
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Force component re-render to reflect changes
    window.location.reload();
  };

  // Function to increase quantity of an item in the cart
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to decrease quantity of an item in the cart
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.product.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  const getImagePath = (item) => {

    const img_path = `http://localhost/shallwe/` + item.product.photos[0].image_path;

    return img_path
  }
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
      <div className="container cart-container">
        <h3>Your Cart</h3>

        {cartItems.length === 0 ? (
          <>
            <div className="emptycart">
              <img src="./images/product/empyt-cart.png" alt="empty-cart" />
              <h3>Ohoo! your cart is empty</h3>
              <Link to={'/products'}>
                <button className='explore-btn'>
                  Explore Products
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div  >
            {cartItems.map((item) => (
              <div key={item.product.id} className="cart-items" style={{ display: "flex" }}>
                <div>
                  <img src={getImagePath(item)} alt={item.product.name} width={200} />
                </div>
                <div className="item-details">
                  <h3>{item.product.name}</h3>
                  <p>Price: ₹{item.product.price}</p>
                  <button className='counter-btn '  onClick={() => decreaseQuantity(item.product.id)}>-</button>
                  {item.quantity}
                  <button className='counter-btn ' onClick={() => increaseQuantity(item.product.id)}>+</button>
                  <MdDelete className=' m-2' onClick={() => removeFromCart(item.product.id)} style={{ fontSize: '28px', color: 'red', cursor: 'pointer' }} />
                </div>
              </div>
            ))}
            <h4 style={{padding:"7px"}}>Cart Total: ₹<b>{totalPrice.toFixed(2)}</b></h4>
            {/* <button className='placeorder-btn' disabled={!localStorage.getItem('user')? true : false} onClick={handlePlaceorder} >Place order</button> */}
            <button className='placeorder-btn'  onClick={handlePlaceorder} >Place order</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart