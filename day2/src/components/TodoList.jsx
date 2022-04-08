import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  let todos = props.todos;
  return (
    <>
      {todos.map((item, index) => {
        return (
          <TodoItem
            changeStatus={props.changeStatus}
            key={item.id}
            index={index}
            title={item.title}
            status={item.status}
          />
        );
      })}
    </>
  );
}

export default TodoList;
