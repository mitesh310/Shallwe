import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/shallwe/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response.json)
    response.json()
      .then(data => {
        console.log(data)
        if (data.status === "200") {
          if (data.userDetails[0].id === "1") {
            // alert('welcome admin');
            localStorage.setItem("isAdmin", true)
            localStorage.setItem('user', email);
            setTimeout(() => {
              window.location.reload()
              navigate('/dashboard')
            }, 1200);
            setTimeout(() => {
              window.location.reload()
            }, 1205);
          }
          else {
            localStorage.setItem('user', email);
            setTimeout(() => {
              
              navigate('/')
            }, 1200);
            setTimeout(() => {
              window.location.reload()
            }, 1205);
          }
          localStorage.setItem("userid", data.userDetails[0].id)
          toast.success(`${data.message}`, {
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
        else {
          toast.error(`${data.message}`, {
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
      })
      .catch((err) => {
        console.log("some error has occured in register", err)
      })

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
      <div className="login">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <span className="icon">
                <MdEmail />

              </span>
              <input type="text"
                placeholder='enter your email'
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="input-group">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input type="password"
                placeholder='enter your password'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            {/* <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div> */}
            <button type="submit" className="btn">
              Login
            </button>
            <div className="sign-link">
              <p>
                Don't have an account?{" "}
                <Link to={'/register'}>register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
