import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../ProjectshowCase/Project";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Home / Projects
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {project.title}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Project Image with Animation */}
          <motion.div
            className="relative group rounded-2xl overflow-hidden shadow-2xl ring-1 ring-purple-500/20"
            variants={fadeInUp}
          >
            <motion.div
              className="relative aspect-video"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Project
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg shadow-xl ring-1 ring-purple-500/20"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Project Overview
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.details}
            </p>

            {/* Technologies Used */}
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full ring-1 ring-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-all duration-200 ring-1 ring-purple-500/30"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-all duration-200 ring-1 ring-purple-500/30"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              <strong className="text-purple-400">Created:</strong>{" "}
              {project.createdDate}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
