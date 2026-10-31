import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import profile from "./data/profile.json";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

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
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Nav name={profile.name} />
      <main>
        <Hero data={profile} />
        <Work data={profile.experience} />
        <Projects projects={profile.projects} />
        <Stack groups={profile.skills} />
        <Journey summary={profile.summary} steps={profile.journey} education={profile.education} />
        <Contact contact={profile.contact} />
      </main>
      <footer className="footer mono">Built by {profile.name} with React</footer>
    </>
  );
}
