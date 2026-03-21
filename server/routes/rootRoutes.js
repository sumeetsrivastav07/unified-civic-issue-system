import express from "express";

// Controllers
import {
  getRootMessage,
  handleTestPost
} from "../controllers/rootController.js";

import { createComplaint } from "../controllers/complaint.controller.js";

// Middleware
import validate from "../middleware/validate.js";

// Validation Schemas
import { createComplaintSchema } from "../validations/complaint.validation.js";

const router = express.Router();


// ✅ Health check route
router.get("/", getRootMessage);


// ✅ Test route (temporary)
router.post("/test", handleTestPost);


// ✅ Complaint route (with validation)
router.post(
  "/complaints",
  validate(createComplaintSchema),
  createComplaint
);


export default router;