import "../styles/sidebar.css";
import logo from "../assets/logo-cv-creator.png";

export default function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    "personal",
    "experience",
    "education",
    "summary",
    "hobbies",
  ];

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
    </div>
  );
}
