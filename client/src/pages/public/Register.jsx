import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { User, Mail, Lock, BriefcaseBusiness } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await register(name, email, password);

    if (result.success) {
      navigate("/profile");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-[150px] opacity-20 bottom-10 right-10"></div>

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}

        <div className="text-white">
          <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-xl">
            <BriefcaseBusiness size={40} />
          </div>

          <h1 className="text-6xl font-extrabold mt-8 leading-tight">
            Find Your
            <br />
            Dream Career
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-lg">
            Join thousands of professionals discovering amazing job
            opportunities. Build your profile, apply instantly, and connect with
            leading companies around the world.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-4xl font-bold">12K+</h2>
              <p className="text-slate-400 mt-2">Jobs</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">800+</h2>
              <p className="text-slate-400 mt-2">Companies</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">40K+</h2>
              <p className="text-slate-400 mt-2">Candidates</p>
            </div>
          </div>
        </div>

        {/* Register Card */}

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[35px] p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-white">Create Account</h2>

          <p className="text-slate-300 mt-3 mb-8">
            Start your journey toward your next opportunity.
          </p>

          {error && (
            <div className="mb-6 bg-red-500/20 border border-red-400 text-red-200 rounded-xl p-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User
                size={20}
                className="absolute left-5 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 outline-none focus:border-blue-400"
              />
            </div>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-5 top-4 text-slate-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 outline-none focus:border-blue-400"
              />
            </div>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-5 top-4 text-slate-400"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-slate-300 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
