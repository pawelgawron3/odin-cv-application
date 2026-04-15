export default function SummaryForm() {
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
          onChange={() => {}}
        ></textarea>
      </div>
    </form>
  );
}
