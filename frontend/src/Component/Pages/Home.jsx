import React from "react";
import Developer from "../../assets/developer.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Terminal,
  Database,
  Code2,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative top-6 text-white overflow-hidden">
      {/* Social Links Side Bar */}
      <div className="hidden fixed left-0 sm:left-2 top-1/2 -translate-y-1/2 sm:flex flex-col gap-6 z-20 animate-fade-in [animation-delay:1.2s] opacity-0">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent mx-auto"></div>
        <a
          href="https://github.com/ABDLSamaD"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/10"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-samad-421793309"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/10"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:your@email.com"
          className="p-3 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-500/10"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500 via-transparent to-transparent mx-auto"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-2rem)] py-8">
          {/* Left Column - Text Content */}
          <div className="space-y-8 z-10" data-aos="fade-right">
            <div className="space-y-4">
              {/* <p className="text-purple-400 font-medium animate-slide-in [animation-delay:0.3s] opacity-0 flex items-center gap-2">
                <span className="h-[1px] w-8 bg-purple-400"></span>
                Hello, I'm Abdul Samad
              </p> */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight animate-slide-in [animation-delay:0.4s] opacity-0">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Creative Developer
                </span>
                <br />
                Building Digital
                <br />
                Experiences
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl animate-slide-in [animation-delay:0.6s] opacity-0">
              I craft beautiful, responsive, and user-friendly websites with
              modern technologies and clean code. Transforming ideas into
              exceptional digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-in [animation-delay:0.8s] opacity-0">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Code2 className="w-5 h-5" />
                <a href="#project">View Projects</a>
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
              <button className="px-6 py-3 border border-purple-500/30 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <a href="#contact"> Contact Me</a>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="animate-slide-in [animation-delay:1s] opacity-0">
              <p className="text-sm text-gray-400 mb-4">Tech Stack</p>
              <div className="flex gap-6">
                <Code className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
                <Terminal className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
                <Database className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="relative animate-fade-in [animation-delay:1s] opacity-0"
            data-aos="fade-left"
          >
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-[2rem] rotate-6 transform-gpu transition-transform duration-300 group-hover:rotate-0"></div>
              <img
                src={Developer}
                alt="Developer workspace"
                className="rounded-[2rem] object-cover w-full h-full shadow-2xl shadow-purple-500/20 transform-gpu -rotate-6 hover:rotate-0 transition-all duration-300 group-hover:scale-105"
                style={{ objectPosition: "center" }}
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 -right-4 p-3 bg-purple-900/30 backdrop-blur-lg rounded-xl border border-purple-500/20 animate-float [animation-delay:1.2s] hidden lg:block">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>
            <div className="absolute bottom-16 -left-8 p-3 bg-pink-900/30 backdrop-blur-lg rounded-xl border border-pink-500/20 animate-float [animation-delay:1.4s] hidden lg:block">
              <Terminal className="w-5 h-5 text-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
