import express from "express";
import { analyzePageController } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzePageController);

export default router;