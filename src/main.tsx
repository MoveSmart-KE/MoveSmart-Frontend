import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageRouter from "./components/PageRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageRouter />
  </StrictMode>
);
