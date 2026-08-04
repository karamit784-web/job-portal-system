import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Search, Briefcase, Users, CheckCircle } from "lucide-react";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Find Your Dream Job <br />
          <span className="text-blue-600">Start Your Career Today 🚀</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover thousands of job opportunities from top companies. Apply in
          seconds and track your application in real time.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-3 flex items-center w-full max-w-2xl border">
            <Search className="text-gray-400 mx-3" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              className="flex-1 outline-none text-gray-700"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {user ? (
            <Link
              to="/jobs"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Explore Jobs
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/jobs"
                className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Browse Jobs
              </Link>
            </>
          )}
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center py-16">
        <div className="bg-white shadow-xl rounded-3xl p-10 hover:scale-105 transition">
          <Briefcase className="mx-auto text-blue-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">5000+</h2>
          <p className="text-gray-600 mt-2">Active Jobs</p>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-10 hover:scale-105 transition">
          <Users className="mx-auto text-purple-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">1200+</h2>
          <p className="text-gray-600 mt-2">Trusted Companies</p>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-10 hover:scale-105 transition">
          <CheckCircle className="mx-auto text-green-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">8000+</h2>
          <p className="text-gray-600 mt-2">Successful Applications</p>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Browse by Category
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Software Development",
              "UI / UX Design",
              "Marketing",
              "Finance",
              "Data Science",
              "Human Resources",
              "Sales",
              "Customer Support",
            ].map((category) => (
              <div
                key={category}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition hover:-translate-y-2"
              >
                <Briefcase className="text-blue-600 mb-4" size={34} />
                <h3 className="text-xl font-semibold">{category}</h3>
                <p className="text-gray-500 mt-2">250+ Open Positions</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOP COMPANIES */}

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Trusted By Top Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Infosys",
              "TCS",
              "Adobe",
              "IBM",
              "Meta",
            ].map((company) => (
              <div
                key={company}
                className="bg-white shadow-lg rounded-2xl py-10 flex justify-center items-center text-2xl font-bold text-gray-700 hover:text-blue-600 transition"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LATEST JOBS */}

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Latest Job Openings
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Full Time
                </span>

                <h3 className="text-2xl font-bold mt-5">React Developer</h3>

                <p className="text-gray-500 mt-2">Google • Bengaluru</p>

                <p className="text-gray-600 mt-5">
                  Looking for experienced React developers with JavaScript,
                  Redux and Tailwind CSS.
                </p>

                <button className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Get Hired in 4 Easy Steps
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                no: "01",
                title: "Create Account",
                desc: "Register and complete your profile.",
              },
              {
                no: "02",
                title: "Search Jobs",
                desc: "Explore thousands of opportunities.",
              },
              {
                no: "03",
                title: "Apply",
                desc: "Submit your application instantly.",
              },
              {
                no: "04",
                title: "Get Hired",
                desc: "Receive interview calls and offers.",
              },
            ].map((step) => (
              <div
                key={step.no}
                className="text-center bg-white shadow-lg rounded-3xl p-8"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  {step.no}
                </div>

                <h3 className="text-2xl font-semibold mt-6">{step.title}</h3>

                <p className="text-gray-600 mt-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Our Platform?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">🚀 Fast Applications</h3>
              <p className="mt-3 text-blue-100">
                Apply to jobs with just one click and track status easily.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">🏆 Top Companies</h3>
              <p className="mt-3 text-blue-100">
                Connect with verified companies and premium job listings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">📊 Real Time Tracking</h3>
              <p className="mt-3 text-blue-100">
                Monitor your application status instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              "Best platform to find tech jobs quickly!"
            </p>
            <h4 className="mt-4 font-semibold">– Rahul</h4>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              "Easy application and fast response from companies."
            </p>
            <h4 className="mt-4 font-semibold">– Priya</h4>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              "Amazing UI and smooth experience!"
            </p>
            <h4 className="mt-4 font-semibold">– Ankit</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
