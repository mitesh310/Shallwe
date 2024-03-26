import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import './header.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

    // const cartItemCount = 5; 

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isShopDropdownVisible, setIsShopDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartItemCount = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0;

    const [isOpen, setIsOpen] = useState(false);
    const navigate =useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const hadleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    localStorage.removeItem('isAdmin')
    localStorage.removeItem('userid')
    toast.error(`goodbye :(`, {
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
        window.location.reload()    
    }, 1205);
    setTimeout(() => {
        navigate('/')
    }, 1201);

    
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
            <div className="header" style={{   marginTop: "20px" }}>
            {/* rgb(202 189 160)s */}
                <div className="menu">
                    <div className="nav-logo">
                        <Link to={'/'} className="" >
                            <img
                                src="./images/logo/hlogo.png"
                                alt="Shall We"
                                className=""
                            />
                        </Link>
                    </div>
                    <div className="">
                        <nav className="navbar navbar-expand-lg hamburger">
                            <button className="navbar-toggler" type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div  className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} >
                                <ul className="navbar-nav"  >
                                    <li
                                        className="nav-item dropdown option"
                                        onMouseEnter={() => setIsDropdownVisible(true)}
                                        onMouseLeave={() => setIsDropdownVisible(false)}
                                    >
                                        <Link to={'/'} className="nav-link" style={{ fontSize: '20px',fontWeight:"bold" }}>
                                            Brand
                                        </Link>
                                        <ul className="dropdown-menu" style={{ display: isDropdownVisible ? 'block' : 'none'}}>
                                            <li><Link to={'/about'} className="dropdown-item">About</Link></li>
                                            <li><Link to={'/contact'} className="dropdown-item">Contact</Link></li>
                                           
                                        </ul>
                                    </li>
                                    <li
                                        className="nav-item dropdown option"
                                        onMouseEnter={() => setIsShopDropdownVisible(true)}
                                        onMouseLeave={() => setIsShopDropdownVisible(false)}
                                    >
                                        <Link to={'/products'} className="nav-link" style={{ fontSize: '20px',fontWeight:"bold" }} >
                                            Shop
                                        </Link>
                                        <ul className="dropdown-menu" style={{opacity:"3", display: isShopDropdownVisible ? 'block' : 'none' }}>
                                            <li><Link to={'/products'} className="dropdown-item">Products</Link></li>
                                            <li><Link to={'/products'} className="dropdown-item">Oil</Link></li>
                                            {/* <li><hr className="dropdown-divider" /></li> */}
                                            <li><Link to={'/products'} className="dropdown-item">Packages</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="cicon">
                        <div className='nav-icons' style={{ position: 'relative', display: 'inline-block' }}>
                            <Link to={'/cart'}>
                                <FaShoppingCart className='carti' style={{fontSize:"23px" ,color:"black" }} />
                            </Link>
                            
                            {cartItemCount > 0 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-3px',
                                        right: '-5px',
                                        background: 'brown',
                                        borderRadius: '50%',
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        color: 'white',
                                    }}
                                >
                                    {cartItemCount}
                                </div>
                            )}
                        </div>
                        {
              localStorage.getItem('user')
                ?
                
               
                 (
                    <div className="dropdown" >
                    <div className="dropdown-toggle nav-icons" onClick={toggleDropdown}>
                      <FaUserAlt className='carti' style={{ color: 'black' }} />
                    </div>
                    {isOpen && (
                      <div className="dropdown-menu end-dropdown">
                        
                        <Link to={'/myorder'} className="dropdown-item">My Order</Link>
                        <Link onClick={hadleLogout} className="dropdown-item">Logout</Link>
                      </div>
                    )}
                  </div>
                     
                 )
                
                :
                ( <Link className='nav-icons' to={'/login'}><FaUserAlt style={{ fontSize: '23px', color:"black" }} /></Link>)
            }
                    </div>
                </div>
            </div>

        </>
    );
}
