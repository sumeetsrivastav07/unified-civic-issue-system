import express from "express";
import { createComplaint } from "../controllers/complaint.controller.js";
import validate from "../middleware/validate.js";
import { createComplaintSchema } from "../validations/complaint.validation.js";

const router = express.Router();

// Complaint routes
router.post("/", validate(createComplaintSchema), createComplaint);

export default router;