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

// API: Register
app.post('/api/register', async (req, res) => {
  console.log(req.body)

  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    res.json({ status: 'ok' })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', error: 'Duplicate email' })
  }
})

// API: Login
app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (user) {
    return res.json({ status: 'ok', user: true })
  } else {
    console.log(err)
    return res.json({ status: 'error', user: false })
  }
})