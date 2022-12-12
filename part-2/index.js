const App = () => {
  return (
    <div>
      <Tweet username="user1" name="jim" date="Saturday" message="Message1" />
      <Tweet username="user2" name="john" date="Sunday" message="Message2" />
      <Tweet username="user3" name="bob" date="Monday" message="Message3" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
