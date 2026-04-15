import PersonalForm from "./features/PersonalForm.jsx";
import ExperienceForm from "./features/ExperienceForm.jsx";
import EducationForm from "./features/EducationForm.jsx";
import SummaryForm from "./features/SummaryForm.jsx";
import HobbiesForm from "./features/HobbiesForm.jsx";

export default function EditorPanel({ activeSection }) {
  switch (activeSection) {
    case "personal":
      return <PersonalForm />;
    case "experience":
      return <ExperienceForm />;
    case "education":
      return <EducationForm />;
    case "summary":
      return <SummaryForm />;
    case "hobbies":
      return <HobbiesForm />;
    default:
      return (
        <div>
          <p>Select a section</p>
        </div>
      );
  }
}
