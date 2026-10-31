import Reveal from "./Reveal.jsx";

export default function Experience({ data }) {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2><span className="mono">02.</span> Experience</h2>
      </Reveal>
      <Reveal delay={60}>
        <div className="job-head">
          <div>
            <h3>{data.role} <span className="accent">@ {data.company}</span></h3>
            <p className="muted">{data.product}</p>
          </div>
          <span className="period mono">{data.period}</span>
        </div>
      </Reveal>
      <div className="timeline">
        {data.items.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 70} className="tl-item">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
