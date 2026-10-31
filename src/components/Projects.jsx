import Reveal from "./Reveal.jsx";
import Spot from "./Spot.jsx";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2>Side projects</h2>
        <p className="sub">Things I built to understand how systems work under the hood.</p>
      </Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <Spot className="proj">
              <div className="flow mono">
                {p.flow.map((f, j) => (
                  <span key={f} className="flow-step">
                    <em>{f}</em>
                    {j < p.flow.length - 1 && <b>&rarr;</b>}
                  </span>
                ))}
              </div>
              <h3>{p.name}</h3>
              <p className="accent">{p.subtitle}</p>
              <p className="muted">{p.text}</p>
              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s} className="chip mono">{s}</span>
                ))}
              </div>
            </Spot>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
