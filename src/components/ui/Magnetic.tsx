import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps = {
  children: React.ReactNode;
  /** how far the element is pulled toward the cursor (px at edge) */
  strength?: number;
  className?: string;
};

/**
 * Pulls its child toward the cursor while hovered, then springs back.
 * A subtle, high-craft micro-interaction for buttons and links.
 */
const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 18,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
