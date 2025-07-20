const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// Better organized routes
router.get("/", authcontroller.home);
router.post("/register", validate(signupSchema), authcontroller.register);
router.post("/login", authcontroller.login);

module.exports = router;
