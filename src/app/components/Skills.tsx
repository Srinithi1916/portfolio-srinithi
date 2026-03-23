import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  TestTube,
  Box,
  Layers,
  FileCode,
  Braces,
  Globe,
  Binary,
  Laptop,
  Terminal,
  Workflow,
  Container,
  GitBranch,
  Github,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "React.js", icon: Braces, color: "#61DAFB" },
        { name: "HTML", icon: FileCode, color: "#E34F26" },
        { name: "CSS", icon: Layers, color: "#1572B6" },
        { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
        { name: "Bootstrap", icon: Box, color: "#7952B3" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Java", icon: Binary, color: "#007396" },
        { name: "Spring Boot", icon: Server, color: "#6DB33F" },
        { name: "Node.js", icon: Laptop, color: "#339933" },
        { name: "Python", icon: Terminal, color: "#3776AB" },
        { name: "C++", icon: Code2, color: "#00599C" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database, color: "#4479A1" },
        { name: "MongoDB", icon: Database, color: "#47A248" },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud, color: "#FF9900" },
        { name: "Firebase", icon: Globe, color: "#FFCA28" },
        { name: "Docker", icon: Container, color: "#2496ED" },
        { name: "Kubernetes", icon: Workflow, color: "#326CE5" },
        { name: "Git", icon: GitBranch, color: "#F05032" },
        { name: "GitHub", icon: Github, color: "#ffffff" },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6">
            Comprehensive technical expertise across the stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all border border-gray-700/50 group"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all`}
              >
                <category.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-2xl mb-4">{category.category}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + skillIndex * 0.05 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 transition-all group/skill"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: skillIndex * 0.2,
                      }}
                    >
                      <skill.icon
                        className="group-hover/skill:scale-125 transition-transform"
                        size={24}
                        style={{ color: skill.color }}
                      />
                    </motion.div>
                    <span className="text-gray-300 flex-1">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl mb-4">Continuous Learning</h3>
          <p className="text-lg opacity-90">
            Always expanding my skill set and staying updated with the latest
            technologies in web development, cloud computing, DevOps, and
            artificial intelligence. Currently pursuing IBM DevOps and Software
            Engineering Professional Certificate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}