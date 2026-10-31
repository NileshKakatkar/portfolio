export default function Spot({ children, className = "" }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`spot ${className}`} onMouseMove={move}>
      {children}
    </div>
  );
}
