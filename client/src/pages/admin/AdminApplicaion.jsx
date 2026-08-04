import React, { useEffect, useState } from "react";
import api from "../../services/api";

const AdminApplication = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const res = await api.get("/application");
            setApplications(res.data?.applications || []);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch applications");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    // ✅ Update Status
    const handleStatusChange = async (id, status) => {
        try {
            await api.put(`/application/${id}`, { status });
            fetchApplications();
        } catch (err) {
            console.error(err);
            alert("Failed to update status");
        }
    };

    // ✅ Delete
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this application?")) return;

        try {
            await api.delete(`/application/${id}`);
            fetchApplications();
        } catch (err) {
            console.error(err);
            alert("Failed to delete");
        }
    };

    // ✅ Status Color Function
    const getStatusColor = (status) => {
        switch (status) {
            case "shortlisted":
                return "bg-green-100 text-green-700";
            case "reviewed":
                return "bg-blue-100 text-blue-700";
            case "rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">
                Admin Applications
            </h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="space-y-6">

                    {applications.length === 0 && (
                        <p className="text-gray-500">
                            No applications found
                        </p>
                    )}

                    {applications.map((app) => (
                        <div
                            key={app._id}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Applicant Info */}
                                <div>
                                    <h2 className="text-xl font-bold">
                                        {app.name}
                                    </h2>

                                    <p className="text-gray-600">
                                        {app.email}
                                    </p>

                                    <p className="text-gray-600">
                                        {app.phone}
                                    </p>

                                    {/* ✅ FIXED RESUME LINK */}
                                    {app.resume && (
                                        <a
                                            href={app.resume}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block text-blue-600 underline font-medium"
                                        >
                                            📥 Download Resume
                                        </a>
                                    )}
                                </div>

                                {/* Job Info */}
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Applied For:
                                    </h3>

                                    <p>{app.job?.title}</p>
                                    <p className="text-gray-500">
                                        {app.job?.company?.name}
                                    </p>
                                    <p className="text-gray-500">
                                        {app.job?.location}
                                    </p>

                                    {/* Status */}
                                    <div className="mt-4">
                                        <label className="block font-medium mb-2">
                                            Status
                                        </label>

                                        <select
                                            value={app.status}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    app._id,
                                                    e.target.value
                                                )
                                            }
                                            className={`border p-2 rounded-lg ${getStatusColor(
                                                app.status
                                            )}`}
                                        >
                                            <option value="pending">
                                                Pending
                                            </option>
                                            <option value="reviewed">
                                                Reviewed
                                            </option>
                                            <option value="shortlisted">
                                                Shortlisted
                                            </option>
                                            <option value="rejected">
                                                Rejected
                                            </option>
                                        </select>
                                    </div>

                                    {/* Delete */}
                                    <button
                                        onClick={() =>
                                            handleDelete(app._id)
                                        }
                                        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminApplication;