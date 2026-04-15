import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import EditorPanel from "./EditorPanel.jsx";
import Preview from "./Preview.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("personal");
  const [cvData, setCvData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      github: "",
    },
    experience: {
      jobName: "",
      companyName: "",
      city: "",
      startDate: "",
      endDate: "",
      jobSummary: "",
    },
    education: {
      schoolName: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
    },
    summary: "",
    hobbies: "",
  });

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <EditorPanel
        activeSection={activeSection}
        cvData={cvData}
        setCvData={setCvData}
      />
      <Preview cvData={cvData} />
    </div>
  );
}
