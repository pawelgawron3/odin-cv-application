export default function Preview({ cvData }) {
  const { personal, experience, education, summary, hobbies } = cvData;

  return (
    <div className="preview">
      <div className="cv">
        <section>
          <h1>
            {personal.firstName} {personal.lastName}
          </h1>
          <p>Email: {personal.email}</p>
          <p>Phone number: {personal.phoneNumber}</p>
          <p>Address: {personal.address}</p>
          <p>Github: {personal.github}</p>
        </section>

        {summary && (
          <section>
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        )}

        <section>
          <h2>Experience</h2>
          <p>
            <strong>{experience.jobName}</strong>
          </p>
          <p>
            {experience.companyName} — {experience.city}
          </p>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.jobSummary}</p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            <strong>{education.schoolName}</strong>
          </p>
          <p>{education.degree}</p>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </section>

        {hobbies && (
          <section>
            <h2>Hobbies</h2>
            <p>{hobbies}</p>
          </section>
        )}
      </div>
    </div>
  );
}
