import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => document.documentElement.dataset.theme === "dark");
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const toggleTheme = () => {
    const theme = darkMode ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0b0f16" : "#f5f5f5");
    setDarkMode(!darkMode);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("Theme changed for this visit, but the preference could not be saved.", error);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 769px)");
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header ref={header} className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="site-nav wrap" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>Abou Bakar Arisar.</Link>
        <div id="navigation-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => <Link key={link.to} to={link.to} aria-current={pathname === link.to ? "page" : undefined} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
          <a className="nav-contact" href="mailto:aboubakar.dev@gmail.com">Let's talk ↗</a>
        </div>
        <div className="nav-controls">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} title={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
          </button>
          <button ref={toggle} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close −" : "Menu +"}
          </button>
        </div>
      </nav>
    </header>
  );
}
