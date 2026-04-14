import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import Sidebar from "./Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sidebar />
  </StrictMode>,
);
