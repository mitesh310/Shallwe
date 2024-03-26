import React from "react";

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import './login.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/shallwe/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    response.json()
      .then((data) => {
        if (data.status === "200") {
          toast.success('Regsitered Sucessfully!', {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(data)

          setTimeout(() => {

            navigate('/login');
          }, 1205);
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
          console.log(data)
        }
      })
      .catch((err) => {
        console.log("some error has occured in register", err)
        toast.error(`error in registering`, {
          position: "top-left",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
            <h2>Register</h2>
            <div className="input-group">
              <span className="icon">
                <FaUserTie />

              </span>
              <input type="text"
                id="username"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div className="input-group">
              <span className="icon">
                <MdEmail />
              </span>
              <input type="email"
              placeholder="enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="input-group">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input type="password"
                id="password"
                placeholder="choose your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="sign-link">
              <p>
                already have an account?{" "}
                <Link to={'/login'} >Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
