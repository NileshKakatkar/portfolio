import Reveal from "./Reveal.jsx";
import Spot from "./Spot.jsx";

const spans = ["s4", "s2", "s2", "s4", "s3", "s3"];

export default function Work({ data }) {
  return (
    <section id="work" className="section">
      <Reveal>
        <h2>What I build</h2>
        <p className="sub">{data.product}</p>
      </Reveal>
      <div className="bento">
        {data.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className={`cell ${spans[i]}`}>
            <Spot className="tile">
              <span className="tag mono">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Spot>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
