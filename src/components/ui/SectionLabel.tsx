import type { ReactNode } from "react";

export default function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`section-label ${className}`}>{children}</span>;
}
