const express = require("express");

const router = express.Router();
const contactController = require("../controllers/contactController.js");

router.get("/contact", contactController.contactForm);

module.exports = router;
