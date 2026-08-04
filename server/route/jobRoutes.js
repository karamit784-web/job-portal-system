const express = require("express");
const {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
} = require("../controller/jobController");

const upload = require("../middleware/upload");

const router = express.Router();

// CREATE JOB
router.post("/", upload.single("thumbnail"), createJob);

// GET ALL JOBS
router.get("/", getAllJobs);

// GET SINGLE JOB
router.get("/:id", getSingleJob);

// UPDATE JOB
router.put("/:id", upload.single("thumbnail"), updateJob);

// DELETE JOB
router.delete("/:id", deleteJob);

module.exports = router;