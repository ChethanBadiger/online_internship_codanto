import "./output.css";
import Hello from "./componets/Hello";
import Bye from "./componets/Bye";
import Animals from "./componets/Animals";
import Furits from "./componets/Furits";
import Message from "./Message";
import Counter from "./componets/Counter";
import React from "react";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Counter />
      </div>
    </>
  );
}

export default App;
