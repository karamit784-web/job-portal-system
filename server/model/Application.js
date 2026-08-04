const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        // ✅ Link to Job
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true,
        },

        // ✅ Link to User (NEW 🔥)
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
        },

        resume: {
            type: String, // Cloudinary URL
            required: true,
        },

        status: {
            type: String,
            enum: ["pending", "reviewed", "shortlisted", "rejected"],
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);