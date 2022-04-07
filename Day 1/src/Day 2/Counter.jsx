import React, { useState } from "react";

function Counter(prop) {
  const [count, setCount] = useState(prop.count);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
}

export default Counter;
