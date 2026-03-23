import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04070d] text-white selection:bg-white/15 selection:text-white">
      <div className="premium-noise pointer-events-none fixed inset-0 z-0 opacity-40" />
      <div className="ambient-grid pointer-events-none fixed inset-0 z-0 opacity-40" />
      <div className="premium-vignette pointer-events-none fixed inset-0 z-0" />
      <FloatingElements />

      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}
