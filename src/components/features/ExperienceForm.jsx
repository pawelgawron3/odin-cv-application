export default function ExperienceForm({ cvData, setCvData }) {
  const fields = [
    { name: "jobName", label: "Job name", type: "text" },
    { name: "companyName", label: "Company name", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "startDate", label: "Start date", type: "date" },
    { name: "endDate", label: "End date", type: "date" },
    { name: "jobSummary", label: "Short job summary", type: "textarea" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({
      ...cvData,
      experience: { ...cvData.experience, [name]: value },
    });
  };

  return (
    <form>
      <h2>Experience</h2>
      <div>
        {fields.map((field) => (
          <div key={field.name} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={cvData.experience[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={cvData.experience[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>
    </form>
  );
}
