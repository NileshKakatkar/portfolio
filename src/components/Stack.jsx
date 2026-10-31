import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function Stack({ groups }) {
  const [g, setG] = useState(0);
  const [name, setName] = useState(groups[0].items[0].name);
  const items = groups[g].items;
  const current = items.find((s) => s.name === name) || items[0];

  const pickGroup = (i) => {
    setG(i);
    setName(groups[i].items[0].name);
  };

  return (
    <section id="stack" className="section">
      <Reveal>
        <h2>Tools I work with</h2>
        <p className="sub">Pick a tool to see where I have used it.</p>
      </Reveal>
      <Reveal delay={80}>
        <div className="tabs">
          {groups.map((gr, i) => (
            <button key={gr.group} className={`tab ${i === g ? "on" : ""}`} onClick={() => pickGroup(i)}>
              {i === g && <motion.span layoutId="tabbg" className="tab-bg" />}
              <span>{gr.group}</span>
            </button>
          ))}
        </div>
        <div className="skill-box">
          <div className="skills">
            {items.map((s) => (
              <motion.button
                key={s.name}
                layout
                className={`skill mono ${s.name === current.name ? "on" : ""}`}
                onClick={() => setName(s.name)}
                whileTap={{ scale: 0.94 }}
              >
                {s.name}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              className="used"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h4>{current.name}</h4>
              {current.usedIn.length ? (
                <>
                  <p className="muted">Used in</p>
                  <div className="chips">
                    {current.usedIn.map((u) => <span key={u} className="chip mono">{u}</span>)}
                  </div>
                </>
              ) : (
                <p className="muted">Part of my everyday toolkit.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
