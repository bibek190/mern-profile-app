require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router.js");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");

// cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,PUT,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// middleware
app.use(express.json());
// middleware

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errorMiddleware);

const PORT = 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to the server at port ${PORT}`);
  });
});
