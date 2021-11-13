import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.use("/user", userRouter);

dotenv.config({ path: "./config.env" });
const PORT = process.env.port || 300;

import { connectToServer } from "./db/conn.js";

mongoose.connect('mongodb://localhost:3000/PharmEasyDB')

app.listen(PORT, () => {
  // perform database connection when server starts
  connectToServer(function (error) {
    if (error)
      console.error(`${error} from connecting the DB to the server`);
  });
});
  