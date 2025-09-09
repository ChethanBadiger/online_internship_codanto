import React from 'react'
import qr from '../assets/qr.png'
import Button from './button'

function Heading() {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <img className='w-26 h-18' src={qr} alt="QR" />
        <h1 className='font-bold text-2xl'>Scan. Tap. Split.</h1>
        <p className='text-gray-500'>Snap the receipt, tap your items, see who owns</p>
        <p className='text-gray-500 mb-10'>what. No sign-ups, no math, no drama.</p>

        <Button name={`${<i className="ri-camera-line"></i>} Scan receipt`} color="bg-orange-600" font_color="text-white"/>
        <Button name="Enter manually" color="bg-white" font_color={`text-black`}/>
    </div>
    </>
  )
}

export default Heading