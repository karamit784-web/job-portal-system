import { useState } from "react";
import api from "../../services/api";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("contact/add", form);

      if (res.data.status) {
        setSuccess("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>

          <p className="text-gray-500 mt-3">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}

          <div className="space-y-5">
            <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>

                <p className="text-gray-500">support@jobportal.com</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="text-blue-600" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>

                <p className="text-gray-500">+91 9876543210</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="text-blue-600" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Address</h3>

                <p className="text-gray-500">Bhubaneswar, Odisha, India</p>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Message
            </h2>

            {success && (
              <div className="bg-green-100 text-green-700 border border-green-300 rounded-lg p-3 mb-5">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-4 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
