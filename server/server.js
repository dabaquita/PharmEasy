const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(express.json());
app.use(cors());

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

// Register
app.post('/api/register', (req, res) => {
  console.log(req.body)
  res.json({ status: 'ok' })


})
