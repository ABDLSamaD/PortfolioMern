import React, { useState } from "react";
import { Menu, X, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <span className="ml-2 text-xl font-bold text-white">
              ABDL<span className="text-blue-400">SAMAD</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              {["Home", "About", "Project", "Contact"].map((item) => (
                <li key={item} className="relative">
                  <a
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className={`relative text-gray-300 transition-colors duration-300 hover:text-white ${
                      activeLink === item ? "text-white" : ""
                    }`}
                    onClick={() => setActiveLink(item)}
                  >
                    {item}
                    <span
                      className={`absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-400 transition-all duration-300 ${
                        activeLink === item ? "w-full" : "group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-gray-300 transition-colors duration-300 hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transform overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-2 px-2 pb-6 pt-2">
            {["Home", "About", "Project", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="group block rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span>{item}</span>
                  <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </a>
            ))}

            {/* Social Icons in Mobile Menu */}
            <div className="mt-6 flex justify-center space-x-6 px-4">
              {[
                {
                  Icon: Github,
                  label: "GitHub",
                  link: "https://github.com/ABDLSamaD",
                },
                { Icon: Twitter, label: "Twitter", link: "#" },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/abdul-samad-421793309",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  link: "https://mail.google.com/mail/u/0/",
                },
              ].map(({ Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  className="group rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-white/20"
                >
                  <Icon className="h-5 w-5 text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
