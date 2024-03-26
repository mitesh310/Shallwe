import React from 'react'
import { useNavigate } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const navigate = useNavigate()
    const hadleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        localStorage.removeItem('isAdmin')
        // window.location.reload()
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
            navigate('/')
        }, 1205);
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
            <div>Your account</div>
            <div>your orders</div>
            <button onClick={hadleLogout}>Logout</button>
        </>
    )
}

export default Account