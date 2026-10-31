import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import Spot from "./Spot.jsx";
import Modal from "./Modal.jsx";

function Flow({ steps }) {
  return (
    <div className="flow mono">
      {steps.map((f, j) => (
        <span key={f} className="flow-step">
          <em>{f}</em>
          {j < steps.length - 1 && <b>&rarr;</b>}
        </span>
      ))}
    </div>
  );
}

export default function Projects({ projects }) {
  const [sel, setSel] = useState(null);
  const p = sel === null ? null : projects[sel];

  return (
    <section id="projects" className="section">
      <Reveal>
        <h2>Side projects</h2>
        <p className="sub">Things I built to understand how systems work under the hood.</p>
      </Reveal>
      <div className="project-grid">
        {projects.map((pr, i) => (
          <Reveal key={pr.name} delay={i * 120}>
            <Spot className="proj" onClick={() => setSel(i)}>
              <Flow steps={pr.flow} />
              <h3>{pr.name}</h3>
              <p className="accent">{pr.subtitle}</p>
              <p className="muted">{pr.text}</p>
              <div className="chips">
                {pr.stack.map((s) => <span key={s} className="chip mono">{s}</span>)}
              </div>
            </Spot>
          </Reveal>
        ))}
      </div>
      <Modal open={p !== null} onClose={() => setSel(null)} label={p?.name}>
        {p && (
          <>
            <span className="tag mono">{p.subtitle}</span>
            <h3>{p.name}</h3>
            <Flow steps={p.flow} />
            <h5>Overview</h5>
            <p>{p.overview}</p>
            <h5>Highlights</h5>
            <ul className="did">
              {p.features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  {f}
                </motion.li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((s) => <span key={s} className="chip mono">{s}</span>)}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
