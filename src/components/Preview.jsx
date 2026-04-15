import "../styles/preview.css";

export default function Preview({ cvData }) {
  const { personal, experience, education, summary, hobbies } = cvData;

  const hasExperience =
    experience.jobName ||
    experience.companyName ||
    experience.city ||
    experience.startDate ||
    experience.endDate ||
    experience.jobSummary;

  const hasEducation =
    education.schoolName ||
    education.degree ||
    education.startDate ||
    education.endDate;

  return (
    <div className="preview">
      <div className="cv">
        <section>
          {(personal.firstName || personal.lastName) && (
            <h1>
              Name: {personal.firstName} {personal.lastName}
            </h1>
          )}
          {personal.email && <p>Email: {personal.email}</p>}
          {personal.phoneNumber && <p>Phone number: {personal.phoneNumber}</p>}
          {personal.address && <p>Address: {personal.address}</p>}
          {personal.github && <p>Github: {personal.github}</p>}
        </section>

        {summary && (
          <section>
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
        )}

        {hasExperience && (
          <section>
            <h2>Experience</h2>
            {experience.jobName && (
              <p>
                <strong>{experience.jobName}</strong>
              </p>
            )}
            {(experience.companyName || experience.city) && (
              <p>
                {experience.companyName}
                {experience.companyName && experience.city && " — "}
                {experience.city}
              </p>
            )}
            {(experience.startDate || experience.endDate) && (
              <p>
                {experience.startDate}
                {experience.startDate && experience.endDate && " - "}
                {experience.endDate}
              </p>
            )}
            {experience.jobSummary && <p>{experience.jobSummary}</p>}
          </section>
        )}

        {hasEducation && (
          <section>
            <h2>Education</h2>
            {education.schoolName && (
              <p>
                <strong>{education.schoolName}</strong>
              </p>
            )}
            {education.degree && <p>{education.degree}</p>}
            {(education.startDate || education.endDate) && (
              <p>
                {education.startDate}
                {education.startDate && education.endDate && " - "}
                {education.endDate}
              </p>
            )}
          </section>
        )}

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
