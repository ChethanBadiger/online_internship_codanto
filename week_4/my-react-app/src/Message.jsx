import React from 'react'

function Message() {
    function SayHello() {
        console.log('Hello');
        
    }
  return (
    <button className='border-2 stroke-amber-600' onClick={SayHello}>Click me to say Hello in console log</button>
  )
}

export default Message