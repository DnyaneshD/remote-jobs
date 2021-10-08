import express from "express";
import getJobs from "./jobs";

const router = express.Router();

router.get("/api/jobs", getJobs);

export default router;
