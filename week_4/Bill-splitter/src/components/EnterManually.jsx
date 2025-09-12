import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

function EnterManually() {
  const [row, setRow] = useState([{ Name: "", price: "" }]);
  const [tip, setTip] = useState(0);
  const [tax, setTax] = useState(0);

  const addRow = () => {
    setRow([...row, { Name: "", price: "" }]);
  };

  const removeRow = (index) => {
    setRow(row.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newRows = [...row];
    newRows[index][field] = value;
    setRow(newRows);
  };

  const Submit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };
  
  const itemsTotal = row.reduce((sum, row) => sum + Number(row.price || 0), 0);
  const grandTotal = itemsTotal + Number(tip) + Number(tax);

  return (
    <>
      <div className="w-screen h-screen flex items-center flex-col">
        {/* fix the icon later */}
        <div className="mt-11">
          <p className="text-gray-500 mb-5">
            <i className="ri-arrow-left-line"></i> Back
          </p>
          <h1 className="font-medium text-black text-2xl mb-5">Receipt Items</h1>
          <p className="text-gray-500 mb-5">List all the items on your receipt</p>

          <form onSubmit={Submit}>
            {row.map((row, index) => (
              <div className="mb-5" key={index}>
                <input className="bg-white rounded-md p-2 mr-2"
                  onChange={(e) => handleChange(index, "Name", e.target.value)}
                  value={row.Name}
                  type="text"
                  name="itemName"
                  placeholder="Name"
                />
                <input className="bg-white rounded-md p-2 mr-2"
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                  value={row.price}
                  step="0.01"
                  type="number"
                  name="itemName"
                  placeholder="price"
                />
                <button onClick={() => removeRow(index)}><i class="ri-close-large-line"></i></button>
              </div>
            ))}
            <div className="mb-5 flex flex-col gap-y-4">
              <button type="button" className="mr-5 py-1.5 border-2 border-gray-400 rounded-md" onClick={addRow}>
               <i class="ri-add-line"></i> Add Item
              </button>
              <div className="w-full h-0.5 bg-gray-400"></div>
              <div className="flex">
                <div className="flex flex-col">
                <label>Tip: </label>
                <input className="bg-white rounded-md p-2 mr-2" type="number" value={tip} onChange={(e) => setTip(e.target.value)} />
                </div>
                <div className="flex flex-col">
                <label>Tax: </label>
                <input className="bg-white rounded-md p-2 " type="number" value={tax} onChange={(e) => setTax(e.target.value)} />
                </div>
              </div>
                <div className="flex justify-end items-center">
                  <p className="font-medium pr-2 text-gray-600">Total: </p><p className="font-bold text-2xl">{grandTotal}</p>
                </div>
              <button className="bg-orange-600 py-3 px-30 rounded-lg mb-4 text-white font-medium" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EnterManually;
