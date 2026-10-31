import { useEffect, useState } from "react";

const links = ["about", "experience", "skills", "projects", "contact"];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <a href="#top" className="logo">
        {name.split(" ")[0]}<span>.</span>
      </a>
      <nav>
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </nav>
    </header>
  );
}
