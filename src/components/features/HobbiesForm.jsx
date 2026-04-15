export default function HobbiesForm({ cvData, setCvData }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setCvData({
      ...cvData,
      hobbies: value,
    });
  };

  return (
    <form>
      <h2>Hobbies</h2>

      <div className="form-field">
        <label htmlFor="hobbies">Hobbies</label>
        <textarea
          id="hobbies"
          name="hobbies"
          rows={4}
          placeholder="e.g. football, chess, reading..."
          value={cvData.hobbies}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
