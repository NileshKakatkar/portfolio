import Reveal from "./Reveal.jsx";

export default function About({ summary, education }) {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2>About me</h2>
      </Reveal>
      <div className="about">
        <Reveal delay={60}>
          <p className="lead">{summary}</p>
        </Reveal>
        <Reveal delay={140} className="edu">
          <span className="tag mono">education</span>
          <h4>{education.degree}</h4>
          <p>{education.school}</p>
          <p className="muted mono">{education.period} | {education.score}</p>
        </Reveal>
      </div>
    </section>
  );
}
