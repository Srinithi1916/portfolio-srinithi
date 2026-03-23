import { motion } from "motion/react";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Dam Inspection and Monitoring System",
      description:
        "Developed a secure web-based system for monitoring dam conditions with real-time visualization, predictive analytics, anomaly detection, and automated alerts to enhance safety and decision-making.",
      technologies: ["React.js", "Spring Boot", "MySQL", "Excel", "Mail API"],
      features: [
        "Real-time monitoring and visualization",
        "Predictive analytics engine",
        "Anomaly detection system",
        "Automated alert notifications",
      ],
    },
    {
      title: "Eco-Build – AI-Driven Sustainable Construction System",
      description:
        "Designed an intelligent system leveraging MCDM (TOPSIS) and predictive modeling to recommend eco-friendly construction materials using real-time weather and location data.",
      technologies: [
        "React.js",
        "Spring Boot",
        "Python (ML)",
        "MySQL",
        "Kaggle Dataset",
      ],
      features: [
        "MCDM (TOPSIS) decision-making algorithm",
        "Machine learning predictive modeling",
        "Real-time weather integration",
        "Location-based recommendations",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-6">My Projects</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">
            Showcasing innovative solutions in full-stack development
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl text-blue-600 flex-1">
                  {project.title}
                </h2>
                <div className="flex gap-3">
                  <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                    <Code size={24} className="text-blue-600" />
                  </button>
                  <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                    <ExternalLink size={24} className="text-blue-600" />
                  </button>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl mb-3">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
