import { calculatePeriodLength } from "../utils/utilsFunctions";

function Education({ educationInfos, language }) {
  return (
    <article className="education">
      <h2>3. {educationInfos.field}</h2>
      {educationInfos.content.map((educationItem, index) => (
        <div key={index} className="education-item">
          <div className="head">
            <div className="diploma-establishment">
              <h3>
                {educationItem.link === "" ? (
                  educationItem.diploma
                ) : (
                  <a href={educationItem.link} target="_blanc">
                    {educationItem.diploma}
                  </a>
                )}
              </h3>
              <h4>
                <a href={educationItem.establishment.webSite} target="_blanc">
                  {educationItem.establishment.name}
                </a>
              </h4>
            </div>

            <div className="date-address">
              <span>{`${educationItem.period.from} - ${
                educationItem.period.to
              } ${calculatePeriodLength(
                educationItem.period.from,
                educationItem.period.to,
                language
              )}`}</span>
              <br />
              <span>{educationItem.address}</span>
            </div>
          </div>

          <div className="content">
            <div className="mension">
              <strong>{educationItem.graduationMention.field} :</strong>{" "}
              <span>{educationItem.graduationMention.content}</span>
            </div>
            <div className="modules">
              <strong>{educationItem.studiedModules.field} :</strong>
              <ul>
                {educationItem.studiedModules.content.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}

export default Education;
