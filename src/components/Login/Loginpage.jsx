import React, { useActionState, useState } from "react";
import "./Login.css";
export const Loginpage = () => {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <form action="" className="form"></form>
            <label htmlFor="name "></label>
            <input type="text" id="your name" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <form action="" className="form"></form>
          <label htmlFor="Email "></label>
          <input type="Email" id="email" placeholder=" Email id" />
        </div>
        <div className="input">
          <form action="" className="form"></form>
          <label htmlFor="Password "></label>
          <input type="Password" required placeholder="Password" />
        </div>
      </div>
      {action === "Sign up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click here!!!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign up")}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
