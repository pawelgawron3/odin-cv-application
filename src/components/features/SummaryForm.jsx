export default function SummaryForm({ cvData, setCvData }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setCvData({
      ...cvData,
      summary: value,
    });
  };

  return (
    <form>
      <h2>Summary</h2>

      <div className="form-field">
        <label htmlFor="summary">Professional summary</label>
        <textarea
          name="summary"
          id="summary"
          rows={5}
          placeholder="Write a short professional summary..."
          value={cvData.summary}
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  );
}
