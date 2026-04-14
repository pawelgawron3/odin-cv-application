import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
