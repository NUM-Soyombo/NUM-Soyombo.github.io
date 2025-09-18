import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages client-side routing
if (sessionStorage.redirect) {
  window.history.replaceState(null, '', sessionStorage.redirect);
  delete sessionStorage.redirect;
}

createRoot(document.getElementById("root")!).render(<App />);
