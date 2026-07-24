import express from "express";
import { analyzePage } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzePage);

export default router;