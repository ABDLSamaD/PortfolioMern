import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Upload } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const portfolioURL = import.meta.env.VITE_BACKEND_URL_API;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = formData;
    try {
      const response = await fetch(`${portfolioURL}/api/contact`, {
        body: JSON.stringify({ name, email, message }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 1500);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen p-4 md:p-8 pt-24" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-purple-200 text-lg">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Get in Touch Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl ring-1 ring-purple-500/20"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10V0C4.477 0 0 4.477 0 10h2zm2 0a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl ring-1 ring-purple-500/20"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
              Comments (1)
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Write your message here..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-purple-300 cursor-pointer hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" />
                    Choose Profile Photo
                  </div>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
                <p className="text-xs text-purple-300/70 mt-2 text-center">
                  Max file size: 5MB
                </p>
              </div>
              <button
                type="button"
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-200"
              >
                Post Comment
              </button>
            </form>
          </motion.div>
        </div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl ring-1 ring-purple-500/20"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Connect With Me
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Add your social media links here */}
          </div>
        </motion.div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <h3 className="text-xl font-semibold text-purple-600">
              Message sent successfully!
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
