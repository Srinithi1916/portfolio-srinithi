import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sri Krishna College of Engineering & Technology",
      location: "Coimbatore",
      duration: "Aug 2022 – May 2026",
      grade: "CGPA: 8.07",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "ARR Matriculation Higher Secondary School",
      location: "Kumbakonam",
      duration: "Jun 2020 – May 2022",
      grade: "Percentage: 82.83",
    },
    {
      degree: "Secondary School Education (SSLC)",
      institution: "Cheran Vidhyalaya Matriculation Higher Secondary School",
      location: "Dindigul",
      duration: "Jun 2019 – May 2020",
      grade: "Percentage: 87.40",
    },
  ];

  const certifications = [
    {
      name: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "Coursera",
      duration: "Jan 2025 - Present",
      status: "In Progress",
    },
    {
      name: "Cyber Security",
      issuer: "Infosys Springboard",
      duration: "Jun 2024 - Aug 2024",
    },
    {
      name: "Cloud Essentials",
      issuer: "Google Cloud",
      duration: "Feb 2024 - Apr 2024",
    },
    {
      name: "Machine Learning & Data Analytics",
      issuer: "Infosys Springboard",
      duration: "Dec 2023 - Jan 2024",
    },
    {
      name: "Google Cloud Architect: Cloud Basics",
      issuer: "Infosys Springboard",
      duration: "Sep 2024 - Oct 2024",
    },
  ];

  const internship = {
    role: "Full Stack Development Intern",
    company: "NoviTech R&D Private Limited",
    duration: "Jun 2024 - Jul 2024",
    project: "Home Interior and Exterior Design Platform (Comfort Home)",
    skills: [
      "React & Bootstrap",
      "Java & Spring Boot",
      "REST API Development",
      "UI/UX Design",
      "Cloud Deployment (AWS)",
    ],
  };

  return (
    <section
      id="education"
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
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <GraduationCap size={32} className="text-blue-400" />
            </motion.div>
            <h3 className="text-3xl">Education</h3>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border-l-4 border-blue-500"
              >
                <h4 className="text-2xl mb-2 text-blue-400">{edu.degree}</h4>
                <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span>{edu.duration}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span className="font-semibold text-blue-400">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={32} className="text-purple-400" />
            <h3 className="text-3xl">Internship</h3>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h4 className="text-2xl text-purple-400 mb-2">
                  {internship.role}
                </h4>
                <p className="text-xl text-gray-300">{internship.company}</p>
              </div>
              <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded-lg">
                {internship.duration}
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-blue-400">Project: </span>
              {internship.project}
            </p>
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-purple-500/20 rounded-lg text-sm border border-purple-500/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <Award size={32} className="text-blue-400" />
            <h3 className="text-3xl">Certifications</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Award className="text-blue-400" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {cert.duration}
                      </span>
                      {cert.status && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                          {cert.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}