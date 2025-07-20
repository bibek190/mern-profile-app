import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section className="register">
        <div className="registration-form">
          <h1>Contact form</h1>
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
              <label htmlFor="message">message</label>
              <textarea
                rows="5"
                column="30"
                type="text"
                name="message"
                placeholder="Enter your message"
                id="message"
                autoComplete="off"
                rows="5"
                cols="30"
                value={user.message}
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="registerButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
