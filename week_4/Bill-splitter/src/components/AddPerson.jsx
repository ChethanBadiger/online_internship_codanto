import React from "react";

function AddPerson() {
    const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="w-screen h-screen flex items-center flex-col bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Assign Items</h2>
          <button className="text-sm border rounded-md px-3 py-1 bg-gray-100 hover:bg-gray-200">
            Split evenly
          </button>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 mb-3"
          >
            <p className="font-medium text-gray-700">{item.Name || "Unnamed"}</p>
            <p className="font-semibold text-gray-900">
              ${Number(item.price || 0).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="flex justify-between items-center border-t pt-4 mt-4">
          <p className="font-semibold text-gray-600">Total</p>
          <p className="font-bold text-lg text-gray-900">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default AddPerson;
