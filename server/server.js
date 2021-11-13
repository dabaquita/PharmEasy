import userRouter from "./routes/user.js";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:3000/PharmEasyDB')

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

app.use("user", userRouter);
