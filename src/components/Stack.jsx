import Reveal from "./Reveal.jsx";

export default function Stack({ groups }) {
  const all = groups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  const rows = [all.slice(0, half), all.slice(half)];

  return (
    <section id="stack" className="section">
      <Reveal>
        <h2>Tools I work with</h2>
      </Reveal>
      <Reveal delay={80} className="marquees">
        {rows.map((row, r) => (
          <div key={r} className={`marquee ${r ? "rev" : ""}`}>
            <div className="track">
              {[...row, ...row, ...row, ...row].map((s, i) => (
                <span key={i} className="pill mono">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
