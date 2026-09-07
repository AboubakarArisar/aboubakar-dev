import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => { document.title = "Aboubakar Isar — Page not found"; }, []);
  return (
    <div className="wrap not-found">
      <p className="metadata">404 / ROUTE NOT FOUND</p>
      <h1>this page took<br />a wrong turn.</h1>
      <p className="text-body">The link may be broken or the page may have moved. Let's get you back to safe ground.</p>
      <Link className="text-link" to="/">Back home <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
