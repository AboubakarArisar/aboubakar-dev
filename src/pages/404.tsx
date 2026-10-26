import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => { document.title = "Page not found | Abou Bakar"; }, []);
  return (
    <div className="page wrap not-found">
      <p className="meta">404 / Route not found</p>
      <h1 className="contact-title" style={{ marginTop: 24 }}>This page took a <span className="accent">wrong turn.</span></h1>
      <p>The link may be broken or the page may have moved.</p>
      <Link className="button" to="/">Back home <span aria-hidden="true">→</span></Link>
    </div>
  );
}
