import React from "react";
import { Github, Linkedin, Mail, Code, Terminal, Database } from "lucide-react";
import About from "./About";

export default function Home() {
  return (
    <section className="relative min-h-screen pt-28">
      <div className="mx-auto max-w-7xl sm:max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex animate-[slideIn_1s_ease-out] items-center rounded-full bg-purple-400/10 px-3 py-2 text-purple-400">
              <Code className="mr-2 h-5 w-5" />
              Welcome to my portfolio
            </div>

            <h1 className="animate-[fadeInUp_1s_ease-out_0.3s_forwards] text-3xl font-bold leading-tight text-white opacity-0 sm:text-4xl lg:text-6xl">
              MERN
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="animate-[fadeInUp_1s_ease-out_0.5s_forwards] text-base text-gray-300 opacity-0">
              Network & Telecom Student! Creating innovative web solutions with
              modern technologies and user-centric design.
            </p>

            <div className="flex flex-wrap gap-4 animate-[fadeInUp_1s_ease-out_0.7s_forwards] opacity-0">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-white transition-all duration-300 hover:bg-purple-600"
              >
                <Terminal className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Projects
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10"
              >
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Contact
              </a>
            </div>

            <div className="flex items-center gap-6 animate-[fadeInUp_1s_ease-out_0.9s_forwards] opacity-0">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group rounded-full bg-white/10 p-4 transition-all duration-300 hover:bg-white/20"
                >
                  <Icon className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div className="relative animate-[scaleIn_1s_ease-out_1s_forwards] opacity-0">
            <div className="relative">
              <div className="animate-[float_6s_ease-in-out_infinite]">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
                  alt="Developer Illustration"
                  className="w-72 rounded-lg shadow-xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-1/4 animate-[float_7s_ease-in-out_infinite] rounded-lg bg-purple-400/10 p-4 backdrop-blur-sm">
                <Database className="h-8 w-8 text-purple-400" />
              </div>

              <div className="absolute -right-8 top-1/2 animate-[float_8s_ease-in-out_infinite] rounded-lg bg-purple-600/10 p-4 backdrop-blur-sm">
                <Code className="h-8 w-8 text-purple-600" />
              </div>

              <div className="absolute bottom-8 left-1/2 animate-[float_6s_ease-in-out_infinite] -translate-x-1/2 rounded-lg bg-purple-500/10 p-4 backdrop-blur-sm">
                <Terminal className="h-8 w-8 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
