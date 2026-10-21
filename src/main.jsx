import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import App from "./App.jsx";
import "./index.css";

// Catch any unhandled script errors outside React rendering
if (typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    console.error("Global window error:", e.error || e.message);
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
