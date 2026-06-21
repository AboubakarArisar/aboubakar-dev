import React, { useEffect, useState } from "react";

type TypewriterProps = {
  /** lines typed one after another, then the cycle repeats */
  lines: string[];
  className?: string;
  typeSpeed?: number;
  pause?: number;
};

/** Types each line out, pauses, deletes, and moves to the next — forever. */
const Typewriter: React.FC<TypewriterProps> = ({
  lines,
  className,
  typeSpeed = 55,
  pause = 1400,
}) => {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx % lines.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % lines.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? typeSpeed / 2 : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, lineIdx, lines, typeSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className='ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-[#e8e2d2]' />
    </span>
  );
};

export default Typewriter;
