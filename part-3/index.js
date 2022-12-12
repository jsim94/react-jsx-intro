const App = () => (
  <div>
    <Person name="Jim" age="16" hobbies={["skiing", "fishing"]} />
    <Person name="Johnathan" age="18" hobbies={["sewing", "cooking"]} />
    <Person name="Joe" age="21" hobbies={["skiing", "fishing"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
