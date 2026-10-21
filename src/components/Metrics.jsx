import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { metrics } from "../data.js";

function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}</span>;
}

export default function Metrics() {
  return (
    <motion.div
      className="metrics"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {metrics.map((m) => (
        <div key={m.label}>
          <b>
            <CountUp value={m.value} decimals={m.decimals} />
            {m.suffix}
          </b>
          <span>{m.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
