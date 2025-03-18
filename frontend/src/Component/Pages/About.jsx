import { Download, FolderGit2, Globe, User } from "lucide-react";
import yourImage from "../../assets/portfolio.jpg";

const About = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden top-10"
      id="about"
    >
      <div className="mx-auto max-w-7xl sm:max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="sm:container mx-auto px-4 py-16">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-purple-300">About Me</h1>
            <p className="mt-2 text-gray-400">
              Transforming ideas into digital experiences
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2 stagger-animation">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white flex item-start sm:items-center sm:flex-row flex-col">
                  <User className="mr-2 h-8 w-8 text-purple-400" />
                  Hello, I&apos;m
                  <span className="block text-purple-400 ml-2">
                    Abdul Samad
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  A passionate developer focused on creating innovative web
                  solutions. While I may not have formal certifications, my
                  hands-on project experience demonstrates my ability to deliver
                  high-quality results and solve real-world problems.
                </p>
              </div>

              <div className="flex gap-4 sm:flex-row flex-col">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
                <a
                  href="#project"
                  className="inline-flex items-center px-6 py-2 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600/10 transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="relative w-52 sm:w-72 mx-auto">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-purple-600/30 bg-purple-900/20 backdrop-blur-sm hover-scale">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={yourImage}
                    alt="Abdul Samad"
                    className="rounded-full object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 stagger-animation">
            <div className="group relative overflow-hidden bg-purple-950/20 p-6 backdrop-blur-md transition-all hover:bg-purple-900/20">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-600/20 p-3 hover-scale">
                  <FolderGit2 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">11</div>
                  <div className="text-sm text-gray-400">Total Projects</div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-purple-900/10 p-6 backdrop-blur-md transition-all hover:bg-purple-900/20">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-600/20 p-3 hover-scale">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-gray-400">Live Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
