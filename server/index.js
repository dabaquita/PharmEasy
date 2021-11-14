import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.js";
import patientRouter from "./routes/patient.js";
import medicalInfoRouter from "./routes/medicalInfo.js";
import billingInfoRouter from "./routes/billingInfo.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.use("/user", userRouter);
app.use("/patient", patientRouter);
app.use("/medicalInfo", medicalInfoRouter);
app.use("/billingInfo", billingInfoRouter);

dotenv.config({ path: "./config.env" });
const CONNECTION_URI = process.env.ATLAS_URI;
const PORT = process.env.port || 3000;

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Successfully Connected'))
  .catch(err => console.log(`Database connection failed due to ${err}`));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
