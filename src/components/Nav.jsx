import { useEffect, useState } from "react";

const links = ["work", "projects", "stack", "journey", "contact"];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <a href="#top" className="logo">
        {name.split(" ")[0]}<span>.</span>
      </a>
      <nav>
        {links.map((l) => (
          <a key={l} href={`#${l}`} className={active === l ? "on" : ""}>{l}</a>
        ))}
      </nav>
    </header>
  );
}
