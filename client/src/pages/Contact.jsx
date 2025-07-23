import React, { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // const { contact } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
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
                value={contact.username}
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
                value={contact.email}
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
                value={contact.message}
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
