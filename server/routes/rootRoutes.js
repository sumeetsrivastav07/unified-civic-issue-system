import express from "express";

// Controllers
import {
  getRootMessage,
  handleTestPost
} from "../controllers/rootController.js";

// Routes
import complaintRoutes from "./complaint.routes.js";

const router = express.Router();

// Health check
router.get("/", getRootMessage);

// Test route
router.post("/test", handleTestPost);

// Complaint routes
router.use("/complaints", complaintRoutes);

export default router;