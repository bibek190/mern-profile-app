import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
