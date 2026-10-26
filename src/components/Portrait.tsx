import { useEffect, useState } from "react";

const pakistanTime = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit" });

export function LocalTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return <time className="live-dot" dateTime={now.toISOString()}>{pakistanTime.format(now)} PKT</time>;
}

export function Portrait({ eager = false, sizes }: { eager?: boolean; sizes: string }) {
  const set = (ext: string) => `/portrait-480.${ext} 480w, /portrait-768.${ext} 768w, /portrait-1024.${ext} 1024w`;
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src="/portrait-768.webp"
        width={1024}
        height={1536}
        alt="Abou Bakar Arisar in a dark suit and round red-tinted glasses, smiling, seated in a dim room lit by red neon."
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding={eager ? "sync" : "async"}
      />
    </picture>
  );
}
