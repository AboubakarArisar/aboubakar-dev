import React, { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

/** Counts from 0 → `to` once it scrolls into view. */
const CountUp: React.FC<CountUpProps> = ({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  decimals = 0,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setValue(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
