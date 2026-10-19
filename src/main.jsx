import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { APP_BASE } from "./utils/appBase";
import App from "./App";

// Point the document base at the application root before React renders, so
// relative asset paths resolve consistently on every client-side route and
// regardless of whether the build is served from a domain root or a sub-path.
const baseEl = document.querySelector("base");
if (baseEl) {
  baseEl.setAttribute("href", APP_BASE);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
