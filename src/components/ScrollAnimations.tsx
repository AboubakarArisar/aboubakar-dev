import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "main .section-label, main .work-heading, main .about-grid, main .about-facts, main .project-card, main .experience-heading, main .experience-card, main .capability, main .contact-main, main .contact-links",
    ));
    let observer: IntersectionObserver | undefined;

    const clear = () => {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove("scroll-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
    const start = () => {
      clear();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

      elements.forEach(element => {
        // Keep initial and hash-linked viewport content immediately readable.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        const siblings = Array.from(element.parentElement?.children ?? []);
        const index = siblings.indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(index, 2) * 70}ms`);
        element.classList.add("scroll-reveal");
        observer?.observe(element);
      });
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest(".scroll-reveal");
      if (element) {
        element.classList.add("is-revealed");
        observer?.unobserve(element);
      }
    };

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", revealFocused);
    return () => {
      clear();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", revealFocused);
    };
  }, [pathname]);

  return null;
}
