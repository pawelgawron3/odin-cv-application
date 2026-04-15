export default function EducationForm() {
  const fields = [
    { name: "schoolName", label: "School name", type: "text" },
    { name: "degree", label: "Degree", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "startDate", label: "Start date", type: "date" },
    { name: "endDate", label: "End date", type: "date" },
  ];

  return (
    <form>
      <h2>Education</h2>

      <div>
        {fields.map((field) => (
          <div key={field.name} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
    </form>
  );
}
