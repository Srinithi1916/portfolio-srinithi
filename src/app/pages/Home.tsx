import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import profileImage from "@/assets/0574043c7c1a4200b09353c4a3c6e17461180608.png";

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              Full Stack Developer
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-blue-600">Srinithi T A</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Motivated and detail-oriented final-year Information Technology
              student with a strong foundation in full-stack development,
              building scalable web applications with real-time systems,
              predictive analytics, and AI-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </motion.button>
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:srinithisrinithi09@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Mail size={24} className="text-gray-700" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Github size={24} className="text-gray-700" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Linkedin size={24} className="text-gray-700" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Srinithi T A"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm">Based in</p>
                <p className="font-semibold">Coimbatore, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
