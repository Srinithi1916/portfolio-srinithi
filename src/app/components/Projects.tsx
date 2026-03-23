import { motion } from "motion/react";
import { ExternalLink, Image } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import intrusionImage1 from "@/assets/26b26848ecf30330fe3cda20f8d2acce302314a3.png";
import intrusionImage2 from "@/assets/752007b600281f1901a2cb36ae6039b70e372713.png";
import intrusionImage3 from "@/assets/dd669af680b100a11750514efdb8a45af9750f68.png";
import intrusionImage4 from "@/assets/c6d002f779cac52b6c11e7bc4af1c2fd27bf55bf.png";
import intrusionImage5 from "@/assets/e7ec8f59dd5b993849baa41e663c9502b4ddc4cc.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const projects = [
    {
      title: "Intrusion Detection System using Voting-Based Neural Network",
      description:
        "Developed an advanced IDS using ensemble of MLP, CNN, and LSTM models with voting mechanism to detect cyberattacks. Achieved high detection accuracy through intelligent voting, reducing false alarms and protecting against zero-day attacks.",
      duration: "Jan 2025 - Apr 2025",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "PyTorch",
        "TensorFlow",
        "Vite",
        "Tailwind CSS",
      ],
      features: [
        "Multi-Layer Perceptron (MLP) for pattern recognition",
        "Convolutional Neural Network (CNN) for spatial features",
        "Long Short-Term Memory (LSTM) for temporal analysis",
        "Voting-based ensemble decision mechanism",
        "SHA-256 security for data integrity",
        "Heartbeat monitoring for system reliability",
      ],
      gradient: "from-red-600 to-orange-600",
      images: [
        intrusionImage1,
        intrusionImage2,
        intrusionImage3,
        intrusionImage4,
        intrusionImage5,
      ],
    },
    {
      title: "IRCTC Clone",
      description:
        "Functional IRCTC clone with real-time train tracking, modern UI with Tailwind CSS, and secure user authentication system.",
      duration: "Oct 2024 - Nov 2024",
      technologies: [
        "React.js",
        "Spring Boot",
        "MySQL",
        "Tailwind CSS",
        "Leaflet.js",
        "JWT",
        "AWS",
      ],
      features: [
        "Real-time train tracking with interactive maps",
        "Seat Allocation Algorithm for efficient booking",
        "Dijkstra's Algorithm for shortest train routes",
        "Secure authentication with JWT/OAuth2",
      ],
      gradient: "from-blue-600 to-cyan-600",
      images: [],
    },
    {
      title: "Dam Inspection and Monitoring System",
      description:
        "Real-time monitoring system with predictive analytics, anomaly detection, and automated alerts for dam safety management.",
      duration: "Aug 2024 - Oct 2024",
      technologies: [
        "React.js",
        "Spring Boot",
        "MySQL",
        "Chart.js",
        "Random Forest",
        "ANN",
        "AWS",
      ],
      features: [
        "Real-time data visualization with Chart.js/D3.js",
        "Random Forest Algorithm for water level predictions",
        "ANN for anomaly detection",
        "Automated alerts using Twilio/Firebase",
      ],
      gradient: "from-purple-600 to-pink-600",
      images: [],
    },
    {
      title: "Comfort Home - Interior Design Platform",
      description:
        "Home Interior and Exterior Design Platform built during internship at NoviTech R&D Private Limited.",
      duration: "Jun 2024 - Jul 2024",
      technologies: [
        "React",
        "Bootstrap",
        "Java",
        "Spring Boot",
        "REST API",
        "SQL",
      ],
      features: [
        "Responsive UI with React and Bootstrap",
        "User-friendly and accessible design principles",
        "Scalable backend with Spring Boot",
        "RESTful API integration",
      ],
      gradient: "from-orange-600 to-red-600",
      link: "https://comfort-home-host.onrender.com/",
      images: [],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-kicker justify-center">Selected Work . Deep Systems</p>
          <h2 className="text-5xl mb-6 mt-5 metallic-text">
            Major Projects
          </h2>
          <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-[#9fc3ff] to-transparent"></div>
          <p className="text-xl text-white/56 mt-6">
            Innovative solutions in full-stack development and AI
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="luxury-panel rounded-[2rem] p-8 md:p-12 transition-all"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex-1">
                  <h3
                    className={`text-3xl mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/42 uppercase tracking-[0.18em]">
                    {project.duration}
                  </p>
                </div>
                <div className="flex gap-3">
                  {project.images && project.images.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() =>
                        setSelectedProject({
                          title: project.title,
                          images: project.images,
                        })
                      }
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                    >
                      <Image size={22} className="text-[#d5ae67]" />
                    </motion.button>
                  )}
                  {project.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={22} className="text-[#9fc3ff]" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-lg text-white/72 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl mb-3 text-[#d5ae67]">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <motion.li
                      key={feature}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d5ae67]"></div>
                      <span className="text-white/56">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl mb-3 text-[#9fc3ff]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={selectedProject.images}
          projectTitle={selectedProject.title}
        />
      )}
    </section>
  );
}
