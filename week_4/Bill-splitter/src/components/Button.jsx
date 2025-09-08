import React from 'react'

function button({name, color, font_color}) {
  return (
    <>
    <button className={`${color} py-3 px-30 rounded-lg mb-4 shadow-xl/20 ${font_color} font-medium`}>{name}</button>
    </>
  )
}

export default button