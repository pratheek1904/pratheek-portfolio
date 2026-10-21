import { AnimatePresence, motion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { projects, type Platform, type Project } from "../data";
import { SectionHead } from "./Reveal";

type Filter = "All" | Platform;

const filters: Filter[] = ["All", "iOS", "Android"];

interface ProjectCardProps {
  p: Project;
  index: number;
}

function ProjectCard({ p, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className="pcard"
      style={{ "--card-accent": p.color } as CSSProperties}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <div className="pcard__thumb" aria-hidden="true">
        <motion.div
          className="pcard__screen"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <i className="a" /><i /><i className="s" /><i /><i className="s" />
        </motion.div>
      </div>
      <div className="pcard__top">
        <h3>{p.name}</h3>
        <span className="ver">{p.version} · {p.platforms.join(" / ")}</span>
      </div>
      <p>{p.summary}</p>
      <p className="pcard__metric mono">↗ {p.highlight}</p>
      <div className="tags">
        {p.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
      <div className="stores">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} className="store">{l.label}</a>
        ))}
        <a href={p.deep.href} className="chip chip--link">{p.deep.label} →</a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = projects.filter((p) => filter === "All" || p.platforms.includes(filter));

  return (
    <section id="work">
      <SectionHead eyebrow="Featured apps" title="Releases">
        Each project is a release: version, platforms, store links, and one number that shows it held up in production.
      </SectionHead>

      <div className="filters" role="tablist" aria-label="Filter by platform">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`filter ${filter === f ? "is-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {filter === f && (
              <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="filter__label">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="projects">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
