import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology – Information Technology",
      institution: "Sri Krishna College of Engineering and Technology",
      duration: "2022 – 2026",
      grade: "CGPA: 8.07",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "A.R.R Matriculation Higher Secondary School",
      duration: "2021 – 2022",
      grade: "Score: 82.83%",
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Cheran Vidhyalaya Matriculation Higher Secondary School",
      duration: "2019 – 2020",
      grade: "Score: 87.40%",
    },
  ];

  const certifications = [
    {
      name: "VMware – Cloud & Virtualization Concepts",
      issuer: "VMware",
    },
    {
      name: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
    },
    {
      name: "Infosys Springboard – Java Spring Training",
      issuer: "Infosys",
    },
    {
      name: "Computational Theory",
      issuer: "Academic Certification",
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
          <h1 className="text-5xl mb-6">Education & Certifications</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap size={32} className="text-blue-600" />
            <h2 className="text-3xl">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-2xl mb-2 text-blue-600">{edu.degree}</h3>
                <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <span>{edu.duration}</span>
                  <span>•</span>
                  <span className="font-semibold">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Award size={32} className="text-blue-600" />
            <h2 className="text-3xl">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
