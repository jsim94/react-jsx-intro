const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <p>{username}</p>
      <p>{name}</p>
      <p>{date}</p>
      <p>{message}</p>
    </div>
  );
};
