export default function PersonalForm() {
  const fields = [
    { name: "firstName", label: "First name", type: "text" },
    { name: "lastName", label: "Last name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "github", label: "Github", type: "text" },
    { name: "phoneNumber", label: "Phone number", type: "tel" },
    { name: "address", label: "Address", type: "text" },
  ];
  return (
    <form>
      <h2>Personal data</h2>
      <div>
        {fields.map((field) => (
          <div key={field.name} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
    </form>
  );
}
