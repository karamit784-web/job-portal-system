const express = require("express");
const {
    createApplication,
    getAllApplications,
    getSingleApplication,
    updateApplicationStatus,
    deleteApplication,
} = require("../controller/applicationController");

const resumeUpload = require("../middleware/resumeUpload");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();


// ✅ CREATE APPLICATION (USER MUST BE LOGGED IN)
router.post(
    "/",
    protect, // ✅ important
    resumeUpload.single("resume"),
    createApplication
);


// ✅ USER CAN SEE ONLY HIS APPLICATIONS
router.get(
    "/my-applications",
    protect,
    (req, res, next) => {
        req.query.my = true; // optional flag if needed
        next();
    },
    getAllApplications
);


// ✅ ADMIN → GET ALL APPLICATIONS
router.get(
    "/",
    protect,
    adminOnly,
    getAllApplications
);


// ✅ GET SINGLE APPLICATION
router.get("/:id", protect, getSingleApplication);


// ✅ UPDATE STATUS (ADMIN ONLY)
router.put(
    "/:id",
    protect,
    adminOnly,
    updateApplicationStatus
);


// ✅ DELETE APPLICATION (ADMIN ONLY)
router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteApplication
);


module.exports = router;