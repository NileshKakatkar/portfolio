export default function Spot({ children, className = "", onClick }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const key = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div
      className={`spot ${onClick ? "clickable" : ""} ${className}`}
      onMouseMove={move}
      onClick={onClick}
      onKeyDown={onClick ? key : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
      {onClick && <span className="hint mono">view details +</span>}
    </div>
  );
}
