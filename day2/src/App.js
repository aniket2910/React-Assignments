import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Problem 1</h1>
      <Counter count={0} />
      <h1>Problem 2</h1>
      <Todo />
    </div>
  );
}

export default App;
