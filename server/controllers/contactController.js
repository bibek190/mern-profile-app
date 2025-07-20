const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const contactMessage = await Contact.create({ username, email, message });

    res.status(201).json({ msg: "message sent" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { contactForm };
