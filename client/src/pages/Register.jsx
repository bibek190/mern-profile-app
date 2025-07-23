import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        // store to local storage
        storetokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (err) {
      console.log("register", err);
    }
  };

  return (
    <>
      <section className="register">
        <div className="registration-form">
          <h1>Registration form</h1>
          <br />
          <form className="form" onSubmit={handleSubmit}>
            <div className="formDiv">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div className="formDiv">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="formDiv">
              <label htmlFor="phone">phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div className="formDiv">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerButton">
              <button type="submit">Register Now</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
