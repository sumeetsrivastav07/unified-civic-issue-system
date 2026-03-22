import express from "express";
import dotenv from "dotenv";
import rootRoutes from "./routes/rootRoutes.js";
import { requestLogger } from "./middleware/requestLogger.js";
import  errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

// 1. Request Logger Middleware
app.use(requestLogger);
app.use(express.json());
// 2. Routes
app.use("/", rootRoutes);

// 3. Global Error Handler (ALWAYS LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
//connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});