import { motion } from "motion/react";
import { Lightbulb, Users, Zap, Award, Trophy } from "lucide-react";

export function About() {
  const strengths = [
    {
      icon: Lightbulb,
      title: "Analytical Skills",
      description: "Strong analytical and problem-solving abilities",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Excellent team collaboration and communication",
    },
    {
      icon: Zap,
      title: "Adaptability",
      description: "Adaptable and quick learner",
    },
    {
      icon: Award,
      title: "Work Ethics",
      description: "Detail-oriented with strong work ethics",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024",
      description: "Finalist - Demonstrated creativity and technical expertise",
      year: "2024",
    },
    {
      icon: Trophy,
      title: "KRISHINNOV 2K23",
      description: "2nd Place - Quiz competition showcasing analytical skills",
      year: "2023",
    },
    {
      icon: Award,
      title: "LeetCode Champion",
      description: "Solved 650+ problems enhancing DSA proficiency",
      year: "Ongoing",
    },
  ];

  return (
    <section
      id="about"
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
          <p className="section-kicker justify-center">Craft . Strategy . Momentum</p>
          <h2 className="text-5xl mb-6 mt-5 metallic-text">
            About Me
          </h2>
          <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-[#d5ae67] to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="luxury-panel rounded-[2rem] p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl mb-6 metallic-text">Professional Summary</h3>
          <p className="text-lg text-white/72 leading-relaxed">
            I am a passionate Full-Stack and DevOps Engineer with expertise in
            Java, ReactJS, SQL, and C++. Proficient in Cloud Computing and
            Cybersecurity, I build secure, scalable, and high-performance
            solutions. With hands-on experience in PowerApps, Power BI, and
            Docker, I leverage modern tools to enhance business efficiency.
            Focused on SAP technologies, my goal is to develop resilient,
            enterprise-grade systems that drive digital transformation and
            optimize operations.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl mb-8 text-center"
          >
            Core Strengths
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="luxury-panel rounded-[1.6rem] p-6 text-center transition-all"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/8 to-white/4"
                >
                  <strength.icon className="text-[#d5ae67]" size={32} />
                </motion.div>
                <h4 className="text-xl mb-2">{strength.title}</h4>
                <p className="text-white/56 text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl mb-8 text-center">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="luxury-panel rounded-[1.6rem] p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <achievement.icon className="text-[#d5ae67]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">
                        {achievement.title}
                      </h4>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/56">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-white/56 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
