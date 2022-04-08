import React from "react";

function TodoItem(props) {
  const handleClick = () => {
    props.changeStatus(props.index);
  };
  return (
    <div className="todo">
      <p>{props.title}</p>
      <div
        className={props.status ? "complete" : "pending"}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default TodoItem;

//   <input type="checkbox" defaultChecked={props.status} />
