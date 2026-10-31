import Reveal from "./Reveal.jsx";

export default function Contact({ contact }) {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2 className="big">Let's work together</h2>
        <p className="lead">Open to backend roles and interesting problems. Drop me a line.</p>
        <a className="btn primary" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="links mono">
          <a href={contact.github} target="_blank" rel="noreferrer">github</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
