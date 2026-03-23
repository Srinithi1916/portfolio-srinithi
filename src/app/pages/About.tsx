import { motion } from "motion/react";
import { Lightbulb, Brain, Eye, Users } from "lucide-react";

export function About() {
  const strengths = [
    {
      icon: Lightbulb,
      title: "Creative Ideation",
      description: "Innovative problem-solving and creative thinking",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Analytical approach to complex challenges",
    },
    {
      icon: Eye,
      title: "Visionary Planning",
      description: "Strategic planning and future-focused solutions",
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Team-oriented with strong communication skills",
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
          <h1 className="text-5xl mb-6">About Me</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl mb-6 text-blue-600">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Motivated and detail-oriented final-year Information Technology
            student with a strong foundation in full-stack development.
            Experienced in building scalable web applications integrating
            real-time systems, predictive analytics, and AI-driven solutions.
            Demonstrates strong problem-solving ability, collaborative mindset,
            and a focus on delivering efficient, user-centric solutions.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl mb-8 text-center"
          >
            Core Strengths
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl mb-2">{strength.title}</h3>
                <p className="text-gray-600 text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl mb-6 text-blue-600">Achievements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl mb-1">
                  Smart India Hackathon (SIH) 2024
                </h3>
                <p className="text-gray-600">Finalist</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl mb-1">SAP Hackathon 2025</h3>
                <p className="text-gray-600">Participant</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
