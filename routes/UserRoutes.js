import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
} from "../controllers/UserController.js";

const router = express.Router();

// User routes
router.post("/register", createUser);
router.post("/login", loginUser); // New route for user login
router.get("/", getUsers);

export default router;
