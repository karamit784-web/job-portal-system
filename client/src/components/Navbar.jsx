import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BriefcaseBusiness } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <BriefcaseBusiness size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Job<span className="text-blue-600">Portal</span>
              </h2>

              <p className="text-xs text-gray-500">Find Your Dream Career</p>
            </div>
          </Link>

          {/* Navigation */}

          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/jobs"
              className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
            >
              Jobs
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/about"
              className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {user && user.role !== "admin" && (
              <Link
                to="/my-applications"
                className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
              >
                My Applications
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">
            {user ? (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
                  >
                    Admin Panel
                  </Link>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div className="hidden md:block">
                    <p className="text-sm text-gray-500">Welcome</p>

                    <p className="font-semibold text-gray-800">{user.name}</p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-full transition font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium shadow-md transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
