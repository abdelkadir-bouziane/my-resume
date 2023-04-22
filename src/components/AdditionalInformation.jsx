const AdditionalInformation = ({ additionalInformation }) => {
  return (
    <article className="additionalInformation">
      <h2>8. {additionalInformation.field}</h2>
      <ul>
        {additionalInformation.content.map((item, index) => (
          <li key={index} className="skill-item">
            <b>{item.field} : </b>
            {item.value}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AdditionalInformation;
