const User = require("../models/user-model");

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

module.exports = { home, register };
