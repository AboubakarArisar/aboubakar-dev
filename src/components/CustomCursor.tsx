import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 38,
        height: 38,
        background: "rgba(100,116,139,0.10)", // #64748B with low opacity
        border: "2.5px solid #94A3B8", // #94A3B8
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        boxShadow: "0 0 16px 2px rgba(100,116,139,0.18)",
        transition: "background 0.2s, border 0.2s, transform 0.08s",
        mixBlendMode: "screen",
      }}
      aria-hidden='true'
    />
  );
};

export default CustomCursor;
