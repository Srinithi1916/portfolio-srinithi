import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0);
      setIsScrolled(window.scrollY > 18);

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`luxury-panel nav-shell relative transition-all duration-500 ${
            isScrolled
              ? "shadow-[0_22px_70px_rgba(0,0,0,0.36)]"
              : "shadow-[0_10px_38px_rgba(0,0,0,0.2)]"
          }`}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#d5ae67] via-white/90 to-[#9fc3ff] opacity-80"
            style={{ width: `${scrollProgress}%`, height: "1px" }}
          />

          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <motion.button
              whileHover={{ scale: 1.01 }}
              onClick={() => scrollToSection("home")}
              className="flex min-w-0 items-center gap-3 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.65rem] uppercase tracking-[0.3em] text-[#d5ae67]">
                STA
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm uppercase tracking-[0.34em] text-white/45">
                  Portfolio
                </span>
                <span className="metallic-text block text-base font-semibold tracking-[0.1em] sm:text-lg">
                  Srinithi T A
                </span>
              </span>
            </motion.button>

            <div className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ y: -1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-full px-4 py-2 text-sm tracking-[0.14em] transition-all ${
                      isActive
                        ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                        : "text-white/60 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="glass-pill px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/65">
                <span className="h-2 w-2 rounded-full bg-[#d5ae67] shadow-[0_0_16px_rgba(213,174,103,0.85)]" />
                Available for builds
              </div>
            </div>

            <button
              className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-200 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="luxury-panel mt-3 rounded-[1.6rem] p-3 lg:hidden"
            >
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`rounded-2xl px-4 py-3 text-left text-sm tracking-[0.18em] transition-all ${
                        isActive
                          ? "bg-white/12 text-white"
                          : "text-white/70 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
