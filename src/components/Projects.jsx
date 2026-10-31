import Reveal from "./Reveal.jsx";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2><span className="mono">04.</span> Projects</h2>
      </Reveal>
      <div className="project-grid">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 120} className="card project">
            <h3>{p.name}</h3>
            <p className="accent">{p.subtitle}</p>
            <p>{p.text}</p>
            <div className="chips">
              {p.stack.map((s) => (
                <span key={s} className="chip mono">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
