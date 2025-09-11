import React from "react";
import qr from "../assets/qr.png";


function Heading() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <img className="w-26 h-18" src={qr} alt="QR" />
        <h1 className="font-bold text-2xl">Scan. Tap. Split.</h1>
        <p className="text-gray-500">
          Snap the receipt, tap your items, see who owns
        </p>
        <p className="text-gray-500 mb-10">
          what. No sign-ups, no math, no drama.
        </p>
        <button className={`bg-orange-600 py-3 px-30 rounded-lg mb-4 shadow-xl/20 text-white font-medium`}><><i className="ri-camera-line mr-2"></i>Scan receipt</></button>
        <button className={`bg-white py-3 px-30 rounded-lg mb-4 shadow-xl/20 text-black font-medium`}>Enter manually</button>
      </div>
    </>
  );
}

export default Heading;
