import React, { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(0);

  function increment() {
    SetCount(count + 1);
  }

  function decrement() {
    SetCount(count - 1);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">The counter is : {count}</h1>

      <button className="m-4 border-2 p-2" onClick={increment}>Increment</button>
      <button className="m-4 border-2 p-2" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
