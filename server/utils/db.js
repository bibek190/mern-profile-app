const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection succesful to database");
  } catch (e) {
    console.error("Database Connection failed");
    process.exit(1);
  }
};

module.exports = connectDb;
