import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data";
import Reveal, { SectionHead } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });

  return (
    <section id="experience">
      <SectionHead eyebrow="Changelog" title="Experience" />
      <div className="timeline" ref={ref}>
        <motion.div className="timeline__line" style={{ scaleY: scrollYProgress }} />
        {experience.map((e, i) => (
          <Reveal key={e.company} className="timeline__item" delay={i * 0.08} y={16}>
            <span className="timeline__dot" />
            <span className="ver">{e.dates}</span>
            <h3>{e.role} · {e.company}</h3>
            <p>{e.outcome}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
