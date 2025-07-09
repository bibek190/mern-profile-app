const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

// middleware
app.use(express.json());
// middleware

app.use("/api/auth", router);

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to the server at port ${PORT}`);
  });
});
