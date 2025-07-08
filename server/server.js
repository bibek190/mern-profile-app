const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening to the server at port ${PORT}`);
});
