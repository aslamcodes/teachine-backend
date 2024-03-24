import express from "express";
import { createSlides, getSlides } from "../controllers/SlidesController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();

// Slides routes
router.post("/", protect, createSlides);
router.get("/", protect, getSlides);

export default router;
