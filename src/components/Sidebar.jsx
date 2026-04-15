import "../styles/sidebar.css";
import logo from "../assets/logo-cv-creator.png";
import html2pdf from "html2pdf.js";

export default function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    "personal",
    "experience",
    "education",
    "summary",
    "hobbies",
  ];

  function handleDownload() {
    const element = document.querySelector("div.cv");

    html2pdf()
      .set({
        margin: 0,
        filename: "cv.pdf",
        html2canvas: { scale: 3 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="CV Creator" />
      </div>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? "active" : ""}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
      <button id="downloadBtn" onClick={handleDownload}>
        Download CV as PDF
      </button>
    </div>
  );
}
