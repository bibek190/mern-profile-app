import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404 Error please go back to Home.</h1>
      <div className="error-box">
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Error;
