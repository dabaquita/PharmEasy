import express from "express";
const router = express.Router();

import { addMedicalInfo } from "../controllers/medicalInfo.js";

router.post("/addMedicalInfo", addMedicalInfo);

export default router;