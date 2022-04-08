import React, { useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    let payload = {
      title: value,
      status: false,
      id: uuidv4(),
    };
    setTodos([...todos, payload]);
  };
  const changeStatus = (index) => {
    todos[index].status = !todos[index].status;
    setTodos([...todos]);
  };
  return (
    <div className="todo-container">
      <div className="todo-list">
        <TodoList changeStatus={changeStatus} todos={todos} />
      </div>
      <div className="input-wrap">
        <input
          type="text"
          value={value}
          placeholder="Write Something here"
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default Todo;
