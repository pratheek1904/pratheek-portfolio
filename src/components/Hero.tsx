import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  const words = profile.headline.split(" ");

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          {profile.role} · release notes
        </motion.span>

        <h1 aria-label={profile.headline}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="word"
              aria-hidden="true"
              initial={{ opacity: 0, y: "0.6em", rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p className="lede" variants={item}>{profile.intro}</motion.p>

        <motion.div className="chips" variants={item}>
          {profile.stacks.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
          {profile.available && (
            <span className="chip chip--amber">
              <span className="pulse" /> Open to work
            </span>
          )}
        </motion.div>

        <motion.div className="ctas" variants={item}>
          <motion.a href="#work" className="btn btn--fill" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            See my apps
          </motion.a>
          <motion.a href={profile.links.cv} className="btn" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__device"
        style={{ y: phoneY, rotate: phoneRotate }}
        initial={{ opacity: 0, y: 60, rotate: 8 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="phone"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="phone__notch" />
          {profile.heroVideo ? (
            <video src={profile.heroVideo} autoPlay muted loop playsInline className="phone__media" />
          ) : (
            <img src={profile.heroImage} alt={`${profile.heroApp.name} app screen`} className="phone__media" />
          )}
        </motion.div>
        <div className="hero__stats">
          {profile.heroApp.stats.map((s, i) => (
            <motion.span
              key={s}
              className="float-chip mono"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
        <p className="cap mono">▶ {profile.heroApp.name}: {profile.heroApp.caption}</p>
      </motion.div>
    </section>
  );
}
