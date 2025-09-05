import React from "react";
import Furit from "./Furit";

function Furits() {
  let fuirts = [
    { name: "apple", price: 450 },
    { name: "organe", price: 350 },
    { name: "red", price: 90 },
    { name: "bruh", price: 100 },
  ];
  return (
    <>
      {fuirts.map((fuirt) => {
        return <Furit name={fuirt.name} price={fuirt.price} />;
      })}
    </>
  );
}

export default Furits;
