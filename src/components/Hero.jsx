import { useEffect, useState } from "react";

export default function Hero({ data }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % data.roles.length), 2600);
    return () => clearInterval(t);
  }, [data.roles.length]);

  return (
    <section id="top" className="hero">
      <p className="eyebrow mono">Hi, I'm</p>
      <h1>{data.name}</h1>
      <div className="role-wrap">
        <span key={i} className="role">{data.roles[i]}</span>
      </div>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
      <a href="#about" className="scroll-hint mono">scroll</a>
    </section>
  );
}
