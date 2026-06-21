import React from "react";

/**
 * Eyebrow label: a glowing accent dot + uppercase tracked text.
 * Used to head each major section consistently.
 */
const SectionLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.32em] text-[#b8b2a4] ${className}`}
    >
      <span className='relative flex h-1.5 w-1.5'>
        <span className='absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[#e8e2d2]' />
        <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-[#e8e2d2]' />
      </span>
      {children}
    </span>
  );
};

export default SectionLabel;
