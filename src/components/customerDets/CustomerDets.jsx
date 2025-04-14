import React, { useState } from "react";
import "./CustomerDets.css";

const Customer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";

    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      // Proceed to next step
    }
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h1 className="form-title">
          DELIVERY <br /> FORM
        </h1>

        <div className="header-info">
          <h4><b>ChicAura Inc.</b></h4>
          <p>+234-123-456-3456</p>
          <p>hello@ChicAurainc.com</p>
          <p>123 Somewhere St. Somehow, ST 12345</p>
        </div>
      </header>

      <main className="form-main">
        <section className="customer-section">
          <h3>Customer Information</h3>
          <form className="customer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error-text">{errors.name}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error-text">{errors.phone}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <small className="error-text">{errors.address}</small>}
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </section>

        <section className="order-section">
          <h3>Order Information</h3>
          <div className="table-container">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Customer;
