import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function Journey({ summary, steps, education }) {
  return (
    <section id="journey" className="section">
      <Reveal>
        <h2>My journey</h2>
        <p className="lead">{summary}</p>
      </Reveal>
      <div className="journey">
        <div className="tl">
          <motion.div
            className="tl-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.when}
              className="tl-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="dot" />
              <span className="when mono">{s.when}</span>
              <h4>{s.title}</h4>
              <p>{s.sub}</p>
            </motion.div>
          ))}
        </div>
        <Reveal delay={120} className="ring-card">
          <svg viewBox="0 0 120 120" className="ring" aria-hidden="true">
            <circle cx="60" cy="60" r="52" className="ring-bg" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              className="ring-fg"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: education.cgpa / 10 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
          <div className="ring-text">
            <strong>{education.cgpa}</strong>
            <span className="mono">/ 10 CGPA</span>
          </div>
          <p className="muted">{education.degree}</p>
        </Reveal>
      </div>
    </section>
  );
}
