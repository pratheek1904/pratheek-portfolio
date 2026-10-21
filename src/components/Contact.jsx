import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <Reveal as="section" className="contact" id="contact">
      <span className="eyebrow">Contact</span>
      <h2>Have an app that needs shipping?</h2>
      <p className="lede">I'm open to full-time roles and freelance projects. The fastest way to reach me is email.</p>
      <div className="ctas">
        <motion.button className="btn btn--fill mono" onClick={copy} whileTap={{ scale: 0.96 }}>
          {copied ? "Copied ✓" : profile.email}
        </motion.button>
        <motion.a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener" whileHover={{ y: -2 }}>LinkedIn</motion.a>
        <motion.a className="btn" href={profile.links.github} target="_blank" rel="noopener" whileHover={{ y: -2 }}>GitHub</motion.a>
        <motion.a className="btn" href={profile.links.cv} whileHover={{ y: -2 }}>CV (PDF)</motion.a>
      </div>
    </Reveal>
  );
}
