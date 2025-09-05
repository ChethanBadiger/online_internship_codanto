import React from "react";

function Animals() {
  let animals = ["cat", "dog", "horse"];
  return (
    <>
      <ul className="list-disc mx-10">
        {animals.map((animal) => {
          return <li className="text-4xl"> {animal} </li>;
        })}
      </ul>
    </>
  );
}

export default Animals;
