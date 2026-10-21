import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
  as?: "div" | "section";
}

// Fades and lifts children in the first time they scroll into view.
export default function Reveal({ children, delay = 0, y = 24, className, as = "div", ...rest }: RevealProps) {
  const Tag = as === "section" ? motion.section : motion.div;
  return (
    <Tag
      {...rest}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHead({ eyebrow, title, children }: SectionHeadProps) {
  return (
    <Reveal className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p className="lede">{children}</p>}
    </Reveal>
  );
}
