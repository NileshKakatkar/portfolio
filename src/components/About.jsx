import Reveal from "./Reveal.jsx";

export default function About({ summary, stats }) {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2><span className="mono">01.</span> About</h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="lead">{summary}</p>
      </Reveal>
      <div className="stats">
        {stats.map((s, idx) => (
          <Reveal key={s.label} delay={120 + idx * 100} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
