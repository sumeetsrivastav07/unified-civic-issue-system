import express from "express";
import {
  getRootMessage,
  handleTestPost
} from "../controllers/rootController.js";

import { createComplaint } from "../controllers/complaint.controller.js";

const router = express.Router();

// GET route (health check)
router.get("/", getRootMessage);

// POST test route (temporary testing purpose)
router.post("/test", handleTestPost);

// NEW: complaint route
router.post("/complaints", createComplaint);

export default router;