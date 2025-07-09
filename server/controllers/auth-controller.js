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
    res.json({ message: req.body });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { home, register };
