import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <Toaster />
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
