import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <section className="register">
        <div className="registration-form">
          <h1>Login</h1>
          <br />
          <form className="form" onSubmit={handleSubmit}>
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
              <button type="submit">Login Now</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
