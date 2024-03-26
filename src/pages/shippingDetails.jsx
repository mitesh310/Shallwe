import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShippingDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      toast.warning(`please enter valid mobile no.`, {
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
    if (formData.pincode.length !== 6) {
      toast.warning(`please enter valid Pincode`, {
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
    navigate('/confirmorder', { state: { formData: formData } })
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
      <div style={{ background: "#E4E3E3" }}>
        <div className="container pt-5 col-8">
          <h1>Almost there...</h1>
          <h3>Please provide your shipping details</h3>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-3">
              <label className="form-label">
                Full Name <span style={{ color: "red" }}> *</span>
              </label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">
                  E-mail<span style={{ color: "red" }}> *</span>
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">
                  Mobile Number <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Shipping Address <span style={{ color: "red" }}> *</span>
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formData.address} onChange={handleChange} required
              />
            </div>
            <div className="row">
              <div className="mb-3 col-6">
                <label className="form-label">
                  Pincode <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  className="form-control"
                  type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">
                  city <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  className="form-control"
                  type="text" id="pincode" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">
                  state <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  className="form-control"
                  type="text" id="pincode" name="state" value={formData.state} onChange={handleChange} required />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label">
                  Country <span style={{ color: "red" }}> *</span>
                </label>
                <input type="text" className="form-control" required />
              </div>

            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mb-5" style={{ padding: '7px 100px' }}>Submit</button>
            </div>
            {/* <button type="submit" class="btn btn-primary mb-5"style={{padding:'7px 100px'}}>Submit</button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
