import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../ProjectshowCase/Project";
import skills from "../ProjectshowCase/Skills";
import * as Icons from "lucide-react";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [visibleItems, setVisibleItems] = useState(new Set());

  const LucideIcon = ({ name }) => {
    const IconComponent = Icons[name];
    return IconComponent ? (
      <IconComponent className="w-8 h-8 text-purple-400" />
    ) : null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.id])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".grid-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <div className="min-h-screen p-4 md:p-8 relative top-16 mb-10" id="project">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">
            Portfolio Showcase
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my journey through projects and technical expertise. Each
            section represents a milestone in my continuous learning path.
          </p>
        </div>

        <div className="flex justify-center gap-14 sm:gap-36 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              activeTab === "projects"
                ? "bg-blue-600 text-white"
                : "bg-transparent text-gray-200 border border-blue-900 hover:bg-blue-700 hover:text-white"
            }`}
          >
            <Icons.Briefcase className="w-6 h-6" />
            Projects
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
              activeTab === "skills"
                ? "bg-blue-900 text-white"
                : "bg-transparent text-blue-400 border border-blue-600 hover:bg-blue-700 hover:text-white"
            }`}
          >
            <Icons.Code className="w-6 h-6" />
            Skills
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "projects" ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-id={`project-${project.id}`}
                  className={`grid-item p-6 bg-purple-900/10 backdrop-blur-lg rounded-2xl border border-purple-600/30 
                    hover:bg-purple-900/20 hover:shadow-lg transition-all hover-scale
                    ${
                      visibleItems.has(`project-${project.id}`)
                        ? "grid-item-visible"
                        : ""
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-purple-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>

                  <Link
                    to={`/project/${project.id}`}
                    className="group mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-all"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-id={`skill-${index}`}
                  className={`grid-item p-4 bg-blue-900/10 backdrop-blur-md rounded-lg border border-blue-600/30 
                    hover:bg-blue-900/20 transition-all hover-scale flex items-center gap-4
                    ${
                      visibleItems.has(`skill-${index}`)
                        ? "grid-item-visible"
                        : ""
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <LucideIcon name={skill.icon} />
                  <h3 className="text-lg font-bold text-blue-400">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
