import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import protect from "./middlewares/authMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import slideRoutes from "./routes/SlidesRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Middleware for authentication

app.use("/api/users", userRoutes);
app.use("/api/slides", slideRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
