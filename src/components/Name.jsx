function Name({ firstName, familyName, photo }) {
  return (
    <article className="name">
      <img src={photo} alt="myPhoto" />
      <h1>{`${firstName} ${familyName}`}</h1>
    </article>
  );
}

export default Name;
