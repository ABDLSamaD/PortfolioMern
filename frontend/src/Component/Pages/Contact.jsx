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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message } = formData;
    try {
      const response = await fetch("http://localhost:5120/contact", {
        body: JSON.stringify({ name, email, message }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      } else {
        alert(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen p-4 md:p-8 pt-24">
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
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message
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
                type="submit"
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
    </section>
  );
};

export default Contact;
