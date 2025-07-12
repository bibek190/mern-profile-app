const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection succesful to database");
  } catch (e) {
    console.error("Failed to connect to database");
    process.exit(1);
  }
};

module.exports = connectDb;
