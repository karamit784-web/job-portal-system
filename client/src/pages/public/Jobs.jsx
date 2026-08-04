import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Briefcase } from "lucide-react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/job");
      setJobs(res.data.jobs.filter((job) => job.isActive));
    } catch (error) {
      console.error(error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading Jobs...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Available Jobs</h1>

      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Briefcase size={48} className="text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800">No Jobs Found</h2>

          <p className="text-gray-500 mt-3 text-center max-w-md">
            There are currently no active job openings. Please check back later
            for new opportunities.
          </p>

          <Link
            to="/"
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              {job.thumbnail && (
                <img
                  src={job.thumbnail}
                  alt={job.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-xl font-bold">{job.title}</h2>

              <p className="text-gray-600 mt-1">{job.company?.name}</p>

              <p className="text-sm text-gray-500 mt-2">📍 {job.location}</p>

              <div className="flex justify-between items-center mt-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {job.jobType}
                </span>

                <Link
                  to={`/jobs/${job._id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
