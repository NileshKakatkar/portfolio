import { useEffect } from "react";
import profile from "./data/profile.json";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
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
        <Work data={profile.experience} />
        <Stack groups={profile.skills} />
        <Projects projects={profile.projects} />
        <About summary={profile.summary} education={profile.education} />
        <Contact contact={profile.contact} />
      </main>
      <footer className="footer mono">Built by {profile.name} with React</footer>
    </>
  );
}
