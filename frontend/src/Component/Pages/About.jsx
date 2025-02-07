import { Download, FolderGit2, Globe, User, Code } from "lucide-react";
import { motion } from "framer-motion";
import yourImage from "../../assets/portfolio.jpg"; // Import your image from the assets folder

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const About = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gray-900/10"
      id="about"
    >
      {/* Animated background shapes */}
      <div className="mx-auto max-w-7xl sm:max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="fixed inset-0 -z-10">
          <motion.div
            className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-purple-500/30 blur-[128px]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[128px]"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="mb-8 text-center"
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-purple-300">About Me</h1>
            <p className="mt-2 text-gray-400">
              Transforming ideas into digital experiences
            </p>
          </motion.div>

          <motion.div
            className="grid gap-16 md:grid-cols-2"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white flex items-center">
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

              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600/10"
                >
                  View Projects
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative w-72 mx-auto"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="aspect-square overflow-hidden rounded-full border-4 border-purple-600/30 bg-purple-900/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={yourImage} // Use the imported image
                    alt="Abdul Samad"
                    className="rounded-full object-cover w-full h-full"
                    loading="lazy" // Lazy loading for the image
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-4 sm:grid-cols-2"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              className="group relative overflow-hidden bg-purple-950/20 p-6 backdrop-blur-md transition-all hover:bg-purple-900/20"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="rounded-lg bg-purple-600/20 p-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FolderGit2 className="h-6 w-6 text-purple-400" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-white">11</div>
                  <div className="text-sm text-gray-400">Total Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden bg-purple-900/10 p-6 backdrop-blur-md transition-all hover:bg-purple-900/20"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="rounded-lg bg-purple-600/20 p-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe className="h-6 w-6 text-purple-400" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-gray-400">Live Projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
