import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "../data.js";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.dataset.theme = theme;
    else delete root.dataset.theme;
    try {
      theme ? localStorage.setItem("theme", theme) : localStorage.removeItem("theme");
    } catch {}
  }, [theme]);
  const isDark =
    theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return [isDark, () => setTheme(isDark ? "light" : "dark")];
}

export default function Nav() {
  const [isDark, toggle] = useTheme();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160);
    setScrolled(y > 10);
  });

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--solid" : ""}`}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="nav__inner">
        <a href="#top" className="nav__brand">{profile.name}</a>
        <nav aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <motion.button
          className="theme-btn"
          onClick={toggle}
          whileTap={{ scale: 0.85, rotate: 30 }}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀" : "☾"}
        </motion.button>
      </div>
    </motion.header>
  );
}
