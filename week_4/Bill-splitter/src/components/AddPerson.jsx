import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

function AddPerson() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { items, tip, tax, grandTotal } = state || {
    items: [],
    tip: 0,
    tax: 0,
    grandTotal: 0,
  };

  const [people, setPeople] = useState([]);
  const [assignments, setAssignments] = useState({});

  const addPerson = () => {
    setPeople([...people, { name: "" }]);
  };

  const removePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));

    const newAssignments = {};
    Object.entries(assignments).forEach(([itemIdx, assignedPeople]) => {
      newAssignments[itemIdx] = assignedPeople.filter((pIdx) => pIdx !== index);
    });
    setAssignments(newAssignments);
  };

  const toggleAssign = (itemIdx, personIdx) => {
    const assignedPeople = assignments[itemIdx] || [];
    if (assignedPeople.includes(personIdx)) {
      setAssignments({
        ...assignments,
        [itemIdx]: assignedPeople.filter((p) => p !== personIdx),
      });
    } else {
      setAssignments({
        ...assignments,
        [itemIdx]: [...assignedPeople, personIdx],
      });
    }
  };

  const splitEvenly = () => {
    const allPeople = people.map((_, idx) => idx);
    const newAssignments = {};
    items.forEach((_, idx) => {
      newAssignments[idx] = allPeople;
    });
    setAssignments(newAssignments);
  };

  return (
    <div className="h-screen w-full flex items-center flex-col mt-11"> 
      <div>
      <button
        onClick={() => navigate("/manual")}
        className="text-gray-500 mb-5 flex items-center"
      >
        <i className="ri-arrow-left-line mr-1"></i> Back
      </button>

      <h1 className="font-medium text-black text-2xl mb-2">Who's Splitting?</h1>
      <p className="text-gray-500 mb-6">Type all the names and assign items</p>
      </div>
      {people.map((person, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            placeholder={`Person ${index + 1}`}
            value={person.name}
            onChange={(e) => {
              const newPeople = [...people];
              newPeople[index].name = e.target.value;
              setPeople(newPeople);
            }}
            className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
          />
          <button
            onClick={() => removePerson(index)}
            className="text-red-500 text-xl"
          >
            <i className="ri-delete-bin-fill"></i>
          </button>
        </div>
      ))}

      <button
        onClick={addPerson}
        className="border-2 border-gray-300 rounded-lg py-3 text-left px-3 mb-6 hover:bg-gray-100"
      >
        + Add Person
      </button>

      <h2 className="font-semibold text-lg mb-3 flex justify-between items-center">
        Assign Items
        <button
          onClick={splitEvenly}
          className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100 ml-5"
        >
          Split evenly
        </button>
      </h2>

      <div className="flex flex-col gap-3 mb-8">
        {items.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="flex flex-col border rounded-lg p-3 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <span>{item.Name}</span>
              <span className="font-medium">${Number(item.price).toFixed(2)}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {people.map((person, personIdx) => {
                const isAssigned =
                  assignments[itemIdx]?.includes(personIdx) || false;
                return (
                  <button
                    key={personIdx}
                    onClick={() => toggleAssign(itemIdx, personIdx)}
                    className={`px-3 py-1 rounded-full border ${
                      isAssigned
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {person.name || `Person ${personIdx + 1}`}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          navigate("/Final", {
            state: { people, items, tip, tax, grandTotal, assignments },
          })
        }
        className="bg-orange-600 py-3 px-20 rounded-lg text-white font-medium"
      >
        Continue
      </button>
    </div>
  );
}

export default AddPerson;
