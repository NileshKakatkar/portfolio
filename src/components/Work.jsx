import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import Spot from "./Spot.jsx";
import Modal from "./Modal.jsx";

const spans = ["s4", "s2", "s2", "s4", "s3", "s3"];

export default function Work({ data }) {
  const [sel, setSel] = useState(null);
  const item = sel === null ? null : data.items[sel];

  return (
    <section id="work" className="section">
      <Reveal>
        <h2>What I build</h2>
        <p className="sub">{data.product}</p>
      </Reveal>
      <div className="bento">
        {data.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70} className={`cell ${spans[i]}`}>
            <Spot className="tile" onClick={() => setSel(i)}>
              <span className="tag mono">{it.tag}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Spot>
          </Reveal>
        ))}
      </div>
      <Modal open={item !== null} onClose={() => setSel(null)} label={item?.title}>
        {item && (
          <>
            <span className="tag mono">{item.tag}</span>
            <h3>{item.title}</h3>
            <h5>The problem</h5>
            <p>{item.challenge}</p>
            <h5>What I did</h5>
            <ul className="did">
              {item.did.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  {d}
                </motion.li>
              ))}
            </ul>
            <div className="chips">
              {item.tech.map((t) => <span key={t} className="chip mono">{t}</span>)}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
