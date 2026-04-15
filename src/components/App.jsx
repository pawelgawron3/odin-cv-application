import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import EditorPanel from "./EditorPanel.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <EditorPanel activeSection={activeSection} />
    </div>
  );
}
