import express from "express";
import { getRootMessage } from "../controllers/rootController.js";

const router = express.Router();

// GET route (health check)
router.get("/", getRootMessage);

// POST test route (temporary testing purpose)
router.post("/test", (req, res) => {
  console.log("Body:", req.body);

  res.json({
    message: "Data received successfully",
    data: req.body,
  });
});

export default router;