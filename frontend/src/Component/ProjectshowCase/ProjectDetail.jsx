"use client";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../ProjectshowCase/Project";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const techIcons = {
  React: <FaReact className="w-5 h-5 text-blue-500" />,
  "Node.js": <FaNodeJs className="w-5 h-5 text-green-500" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-green-600" />,
  Express: <SiExpress className="w-5 h-5 text-gray-500" />,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(
    (project) => project.id === Number.parseInt(id)
  );

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f] text-white text-xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Home / ProjectDetails
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {project.title}
          </h1>

          {/* Project Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Left Column - Description & Tech Stack */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Description */}
              <div className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </div>
              <div className="text-gray-300 text-lg leading-relaxed">
                {project.details}
              </div>

              {/* Live Demo & GitHub Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </a>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-md text-sm"
                    >
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Preview & Features */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Project Preview */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Key Features */}
              <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetail;
