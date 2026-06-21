import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Scroll-triggered reveal: fades + rises into place once, when scrolled into view.
 * Honors prefers-reduced-motion via the global CSS guard.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
