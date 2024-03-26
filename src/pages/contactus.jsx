import React, { useState } from 'react'
// import './contactus.css'
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = () => {

  }
  return (
    <div className='contactus'>
      <div >
        <div className="container pt-5 col-8">
          <h1>We love to hear from you</h1>

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
                Your message <span style={{ color: "red" }}> *</span>
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formData.address} onChange={handleChange} required
              />
            </div>
            <div className="row">
              
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mb-5" style={{ padding: '7px 100px' }}>Submit</button>
            </div>
            {/* <button type="submit" class="btn btn-primary mb-5"style={{padding:'7px 100px'}}>Submit</button> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
