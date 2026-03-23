import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Server,
  Wrench,
  Database,
  Cloud,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Java", "C++", "Python", "SQL"],
      color: "blue",
    },
    {
      category: "Frontend Technologies",
      icon: Palette,
      skills: ["React.js", "HTML", "CSS"],
      color: "purple",
    },
    {
      category: "Backend Technologies",
      icon: Server,
      skills: ["Spring Boot"],
      color: "green",
    },
    {
      category: "Database",
      icon: Database,
      skills: ["MySQL"],
      color: "orange",
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Cloud Computing", "AWS"],
      color: "cyan",
    },
    {
      category: "Tools & Other",
      icon: Wrench,
      skills: ["Testing", "Excel", "Git"],
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      cyan: "bg-cyan-100 text-cyan-600",
      red: "bg-red-100 text-red-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-6">Technical Skills</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getColorClasses(
                  category.color
                )}`}
              >
                <category.icon size={32} />
              </div>

              <h2 className="text-2xl mb-4">{category.category}</h2>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl mb-4">Continuous Learning</h2>
          <p className="text-lg opacity-90">
            Always expanding my skill set and staying updated with the latest
            technologies in web development, cloud computing, and artificial
            intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
