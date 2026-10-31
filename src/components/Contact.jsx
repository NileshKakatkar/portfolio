import Reveal from "./Reveal.jsx";

export default function Contact({ contact, education }) {
  return (
    <section id="contact" className="section">
      <Reveal>
        <h2><span className="mono">05.</span> Education & Contact</h2>
      </Reveal>
      <Reveal delay={60} className="card edu">
        <h4>{education.degree}</h4>
        <p>{education.school}</p>
        <p className="muted mono">{education.period} | {education.score}</p>
      </Reveal>
      <Reveal delay={140} className="contact">
        <p className="lead">Open to backend and platform engineering opportunities. Say hello.</p>
        <a className="btn primary" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="links mono">
          <a href={contact.github} target="_blank" rel="noreferrer">github</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
