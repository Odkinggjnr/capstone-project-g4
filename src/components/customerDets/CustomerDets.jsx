import React from "react";
import "./CustomerDets.css";

const Customer = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 id="title">
          DELIVERY <br /> FORM
        </h1>

        <span className="header-info">
          <h4>
            <b>INWOO Inc.</b>
          </h4>
          <p>+234-123-456-3456</p>
          <p>hello@inwooinc.com</p>
          <p>123 Somewhere St. Somehow, ST 12345</p>
        </span>
      </header>

      <main>
        <h3>Customer Information</h3>
        <span className="customer-info">
          <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} placeholder="Enter your name:" />

            <br />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" placeholder="Enter your phone number:" />

            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Enter your email:" />

            <br />

            <label htmlFor="address">Address:</label>
            <input type="text" placeholder="Enter your address:" />
          </form>
        </span>

        <h3 id="order-info">Order Information</h3>
        <span className="table-span">
          <table className="table">
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </span>
      </main>
    </div>
  );
};

export default Customer;
