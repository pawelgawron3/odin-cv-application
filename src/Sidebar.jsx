export default function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    "personal",
    "experience",
    "education",
    "skills",
    "summary",
    "hobbies",
    "languages",
    "certificates",
  ];

  return (
    <div className="sidebar">
      <h1>CV creator</h1>
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
