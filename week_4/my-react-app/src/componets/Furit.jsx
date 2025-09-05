import React from 'react'

function Furit({name , price}) {
  return (
    // <li> The price of {name} is {price}</li>
    <li>{price > 100 ? <h1>This {name} is above 100 rupees</h1> : " "}</li>
  )
}

export default Furit