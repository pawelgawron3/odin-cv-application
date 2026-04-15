import PersonalForm from "./features/PersonalForm.jsx";
import ExperienceForm from "./features/ExperienceForm.jsx";
import EducationForm from "./features/EducationForm.jsx";
import SummaryForm from "./features/SummaryForm.jsx";
import HobbiesForm from "./features/HobbiesForm.jsx";

const sectionComponents = {
  personal: <PersonalForm />,
  experience: <ExperienceForm />,
  education: <EducationForm />,
  summary: <SummaryForm />,
  hobbies: <HobbiesForm />,
};

export default function EditorPanel({ activeSection }) {
  return (
    sectionComponents[activeSection] || (
      <div>
        <p>Select a section</p>
      </div>
    )
  );
}
