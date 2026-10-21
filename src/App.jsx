import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Metrics from "./components/Metrics.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <main className="wrap">
        <Hero />
        <Metrics />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="wrap footer">
        <span className="mono">build {new Date().getFullYear()}.1 · made with React + Framer Motion</span>
      </footer>
    </>
  );
}
