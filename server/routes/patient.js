import express from "express";
const router = express.Router();

import { addPatient, deletePatient } from "../controllers/patient.js";

router.post("/addPatient", addPatient);
router.post("/deletePatient", deletePatient);

export default router;