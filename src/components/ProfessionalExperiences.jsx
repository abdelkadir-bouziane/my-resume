import { calculatePeriodLength } from "../utils/utilsFunctions";

function ProfessionalExperiences({ experiencesInfos, language }) {
  return (
    <article className="experiences">
      <h2>2. {experiencesInfos.field}</h2>
      {experiencesInfos.content.map((experienceItem, index) => (
        <div key={index} className="experience-item">
          <div className="head">
            <div className="experience-establishment">
              <h3>
                {experienceItem.link === "" ? (
                  experienceItem.experience
                ) : (
                  <a href={experienceItem.link} target="_blanc">
                    {experienceItem.experience}
                  </a>
                )}
              </h3>
              <h4>
                <a href={experienceItem.establishment.webSite} target="_blanc">
                  {experienceItem.establishment.name}
                </a>
              </h4>
            </div>

            <div className="date-address">
              <span>{`${experienceItem.period.from} - ${
                experienceItem.period.to
              } ${calculatePeriodLength(
                experienceItem.period.from,
                experienceItem.period.to,
                language
              )}`}</span>
              <br />
              <span>{experienceItem.address}</span>
            </div>
          </div>

          <p>{experienceItem.description}</p>
        </div>
      ))}
    </article>
  );
}

export default ProfessionalExperiences;
