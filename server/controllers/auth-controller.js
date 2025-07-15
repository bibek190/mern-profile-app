const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Homepage logic
const home = async (req, res) => {
  try {
    res.send("Welcome to the Home Page. Routing,controller");
  } catch (e) {
    console.log(e);
  }
};

// Registration logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exist." });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      message: "registration succesful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (e) {
    console.log(e);
  }
};

// -----------------Login--------------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log("userExist", userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(201).json({
        message: "registration succesful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or password" });
    }
  } catch (e) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { home, register, login };
