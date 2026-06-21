import React from "react";

/**
 * Fixed, full-viewport backdrop — deliberately restrained:
 *  - two faint warm light sources for depth (no colored blobs)
 *  - a fine masked grid
 *  - a vignette to ground the edges
 * Purely decorative, sits behind all content.
 */
const AuroraBackground: React.FC = () => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0b]'
    >
      {/* soft warm light, top */}
      <div
        className='absolute -top-[20%] left-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full opacity-[0.10] blur-[130px]'
        style={{
          background:
            "radial-gradient(circle, rgba(244,241,234,0.9) 0%, rgba(244,241,234,0) 70%)",
          animation: "drift-1 28s ease-in-out infinite",
        }}
      />
      {/* faint cool light, lower right for subtle contrast */}
      <div
        className='absolute bottom-[-15%] right-[-5%] h-[45vmax] w-[45vmax] rounded-full opacity-[0.06] blur-[140px]'
        style={{
          background:
            "radial-gradient(circle, rgba(180,178,170,0.8) 0%, rgba(180,178,170,0) 70%)",
          animation: "drift-2 34s ease-in-out infinite",
        }}
      />

      {/* fine grid */}
      <div
        className='absolute inset-0 opacity-[0.35]'
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,241,234,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 25%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 25%, transparent 78%)",
        }}
      />

      {/* vignette */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, transparent 55%, rgba(10,10,11,0.9) 100%)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
