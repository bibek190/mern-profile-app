// Homepage logic

const home = async (req, res) => {
  res.send("Welcome to the Home Page. Routing,controller");
};

// Registration logic

const register = async (req, res) => {
  res.send("Welcome to the Register Page. Routing, controller");
};

module.exports = { home, register };
