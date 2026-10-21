import { motion, type Variants } from "framer-motion";
import { skills } from "../data";
import { SectionHead } from "./Reveal";

const grid: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const cell: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function About() {
  return (
    <section id="about">
      <SectionHead eyebrow="About" title="What I'm good at">
        I care about apps that open instantly, work without a signal, and feel at home on the platform. Skills grouped by what they let me ship.
      </SectionHead>
      <motion.div
        className="principles"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skills.map((s) => (
          <motion.div key={s.area} variants={cell}>
            <h3>{s.area}</h3>
            <ul>
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
