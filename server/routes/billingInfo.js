import express from "express";
const router = express.Router();

import { addBillingInfo } from "../controllers/billingInfo.js";

router.post("/addBillingInfo", addBillingInfo);

export default router;