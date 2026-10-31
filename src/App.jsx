import { useEffect } from "react";
import profile from "./data/profile.json";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  useEffect(() => {
    const move = (e) => {
      const root = document.documentElement.style;
      root.setProperty("--mx", `${e.clientX}px`);
      root.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div className="glow" />
      <Nav name={profile.name} />
      <main>
        <Hero data={profile} />
        <About summary={profile.summary} stats={profile.stats} />
        <Experience data={profile.experience} />
        <Skills groups={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact contact={profile.contact} education={profile.education} />
      </main>
      <footer className="footer mono">Built by {profile.name} with React</footer>
    </>
  );
}
