import React, { useEffect, useRef, useState } from "react";

/**
 * Dual custom cursor:
 *  - a precise inner dot that tracks the pointer 1:1
 *  - an outer ring that lags with spring-like easing
 * The ring grows + brightens over interactive elements (a, button, [data-cursor]).
 * Disabled on touch / coarse-pointer devices.
 */
const CustomCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest("a, button, [data-cursor], input, textarea")
      );
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden='true'
        className='pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,background,border-color] duration-200 ease-out'
        style={{
          width: hovering ? 54 : 32,
          height: hovering ? 54 : 32,
          border: "1.5px solid rgba(232,226,210,0.65)",
          background: hovering
            ? "rgba(232,226,210,0.10)"
            : "rgba(232,226,210,0.03)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden='true'
        className='pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full'
        style={{
          background: "#f4f1ea",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default CustomCursor;
