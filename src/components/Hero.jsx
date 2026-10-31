export default function Hero({ data }) {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <span className="badge mono"><i /> Software Developer at {data.experience.company}</span>
        <h1>{data.name}</h1>
        <p className="role">{data.roles[0]}</p>
        <p className="intro">{data.intro}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
      <div className="term mono" aria-hidden="true">
        <div className="term-bar"><i /><i /><i /></div>
        <div className="term-body">
          {data.terminal.map((l, i) => (
            <p key={l.k} style={{ animationDelay: `${0.6 + i * 0.7}s` }}>
              <span className="accent">$</span> {l.k}
              <br />
              <span className="muted">{l.v}</span>
            </p>
          ))}
          <p className="caret" style={{ animationDelay: `${0.6 + data.terminal.length * 0.7}s` }}>
            <span className="accent">$</span> <b />
          </p>
        </div>
      </div>
    </section>
  );
}
