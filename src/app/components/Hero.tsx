import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail, Code, Terminal } from "lucide-react";
import profileImage from "@/assets/0574043c7c1a4200b09353c4a3c6e17461180608.png";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:srinithisrinithi09@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/srinithi-t-a-82a904255/",
    label: "LinkedIn",
  },
  {
    icon: Code,
    href: "https://leetcode.com/u/srinithisrinithi09/",
    label: "LeetCode",
  },
  {
    icon: Terminal,
    href: "https://www.codechef.com/users/srinithisrinit",
    label: "CodeChef",
  },
];

const highlights = [
  { value: "650+", label: "Problems solved with disciplined DSA practice" },
  { value: "SIH", label: "Finalist in Smart India Hackathon 2024" },
  { value: "24/7", label: "Built with reliability, security, and calm delivery" },
];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="space-y-6">
            <p className="section-kicker">
              Full Stack Developer . DevOps Engineer . Prompt Engineer
            </p>

            <div className="space-y-5">
              <h1 className="display-title max-w-4xl text-white">
                Building products as a
                <span className="metallic-text block">
                  Full-Stack and DevOps Engineer.
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                I work across frontend, backend, cloud, and AI-assisted
                workflows to build secure, scalable, and high-performance
                solutions. As a Full-Stack Developer, DevOps Engineer, and
                Prompt Engineer, I focus on turning ideas into production-ready
                systems with clean user experience and reliable delivery.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="primary-cta inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] sm:text-base"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="secondary-cta inline-flex items-center gap-3 px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-white/80 sm:text-base"
            >
              Explore Projects
            </motion.button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="luxury-panel rounded-[1.8rem] px-5 py-5"
              >
                <div className="text-3xl font-semibold tracking-[-0.08em] text-white">
                  {item.value}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 + index * 0.08, duration: 0.6 }}
                whileHover={{ y: -2, scale: 1.01 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/70"
                aria-label={link.label}
              >
                <link.icon size={16} className="text-[#d5ae67]" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-[32rem] justify-center"
        >
          <div className="absolute bottom-6 h-28 w-[18rem] rounded-full bg-black/60 blur-3xl" />

          <motion.div
            animate={{ rotate: [0, 6, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-1/2 h-[29rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/7"
          />

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1/2 h-[24.75rem] w-[24.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5ae67]/14"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 right-0 z-20 hidden max-w-[14rem] rounded-[1.7rem] border border-white/10 bg-[#08101b]/80 px-5 py-4 backdrop-blur-xl md:block"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/46">
              Based in
            </p>
            <p className="mt-2 text-lg font-semibold tracking-[0.04em] text-white">
              Coimbatore, India
            </p>
            <p className="mt-1 text-sm text-white/52">
              Available for product teams and full-time roles.
            </p>
          </motion.div>

          <div className="absolute inset-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(159,195,255,0.22),transparent_58%)] blur-3xl" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="relative flex h-[23rem] w-[23rem] items-center justify-center sm:h-[26rem] sm:w-[26rem]">
              <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,246,221,0.95),rgba(160,196,255,0.42)_42%,rgba(7,12,20,0.95)_74%,rgba(1,2,4,1))] shadow-[0_34px_90px_rgba(0,0,0,0.42)]" />
              <div className="absolute inset-[3px] rounded-full bg-[#060a12]" />
              <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_22%),linear-gradient(160deg,#111c2c_0%,#0a1019_55%,#04060a_100%)]" />
              <div className="absolute inset-6 rounded-full border border-white/12" />
              <div className="absolute inset-8 rounded-full border border-[#d5ae67]/18" />

              <div className="absolute inset-[3.1rem] overflow-hidden rounded-full border border-white/10 bg-[#0b1320] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/26 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07111c]/72 to-transparent" />
                <div className="absolute left-[14%] top-[8%] h-[20%] w-[52%] rotate-[-20deg] rounded-full bg-white/8 blur-2xl" />
                <img
                  src={profileImage}
                  alt="Srinithi T A"
                  className="h-full w-full object-cover object-[center_18%] scale-[1.12] contrast-[1.06] brightness-[1.03] saturate-[0.98]"
                />
              </div>

              <motion.div
                animate={{ opacity: [0.28, 0.6, 0.28], scale: [1, 1.025, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[1.2rem] rounded-full border border-[#9fc3ff]/12 shadow-[0_0_46px_rgba(159,195,255,0.15)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
