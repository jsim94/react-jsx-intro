const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <p>Learn some information about this person.</p>
      <h3>
        {name.slice(0, 6)} - {age} yrs old
      </h3>
      <h3>{age < 18 ? "you must be 18" : "please go vote!"}</h3>
      {hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </div>
  );
};
