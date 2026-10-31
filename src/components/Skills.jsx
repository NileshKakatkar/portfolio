import Reveal from "./Reveal.jsx";

export default function Skills({ groups }) {
  return (
    <section id="skills" className="section">
      <Reveal>
        <h2><span className="mono">03.</span> Skills</h2>
      </Reveal>
      <div className="skill-grid">
        {groups.map((g, idx) => (
          <Reveal key={g.group} delay={idx * 80} className="card">
            <h4>{g.group}</h4>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s} className="chip mono">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
