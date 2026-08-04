import React, { useState } from "react";
import api from "../../services/api";

const ApplyModal = ({ open, setOpen, jobId }) => {
    const [loading, setLoading] = useState(false);
    const [resume, setResume] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Resume validation
        if (!resume) {
            alert("Please upload your resume");
            return;
        }

        // ✅ File type validation
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(resume.type)) {
            alert("Only PDF, DOC, DOCX files are allowed");
            return;
        }

        // ✅ File size validation (5MB)
        if (resume.size > 5 * 1024 * 1024) {
            alert("Resume file must be less than 5MB");
            return;
        }

        try {
            setLoading(true);

            const data = new FormData();
            data.append("jobId", jobId);

            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key]);
            });

            data.append("resume", resume);

            await api.post("/application", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Application Submitted Successfully ✅");

            // ✅ Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
            });

            setResume(null);
            setOpen(false);

        } catch (err) {
            console.error(err.response?.data || err.message);
            alert(
                err.response?.data?.message ||
                "Something went wrong ❌"
            );
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">

                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">Apply for Job</h2>
                    <button onClick={() => setOpen(false)}>✕</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <div>
                        <label className="block font-medium mb-2">
                            Upload Resume (PDF/DOC)
                        </label>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={(e) => setResume(e.target.files[0])}
                            className="w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ApplyModal;