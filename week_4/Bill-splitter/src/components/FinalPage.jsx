import { useLocation, useNavigate } from "react-router";

function FinalPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { people, items, tip, tax, assignments } = state || {
    people: [],
    items: [],
    tip: 0,
    tax: 0,
    assignments: {},
  };

  // initialize person totals
  const totals = new Array(people.length).fill(0);

  // distribute item costs based on assignment
  items.forEach((item, itemIdx) => {
    const assignedPeople = assignments[itemIdx] || [];
    if (assignedPeople.length > 0) {
      const share = Number(item.price) / assignedPeople.length;
      assignedPeople.forEach((pIdx) => {
        totals[pIdx] += share;
      });
    }
  });

  // distribute tip and tax evenly among all people
  const extraPerPerson = (Number(tip) + Number(tax)) / (people.length || 1);
  for (let i = 0; i < totals.length; i++) {
    totals[i] += extraPerPerson;
  }

  return (
    <div className="w-full h-screen flex flex-col mt-11 items-center">
        <div>
      <button
        onClick={() => navigate("/AddPerson")}
        className="text-gray-500 mb-5 flex items-center"
      >
        <i className="ri-arrow-left-line mr-1"></i> Back
      </button>

      <h1 className="font-medium text-black text-2xl mb-2">Split Summary</h1>
      <p className="text-gray-500 mb-6">
        Here is how you should split this bill:
      </p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {people.map((person, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border rounded-lg p-3 bg-gray-50 "
          >
            <span className="mr-40">{person.name || `Person ${idx + 1}`}</span>
            <span className="font-bold">
              ${totals[idx].toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="border-2 border-gray-300 py-3 rounded-lg text-gray-700 font-medium flex items-center justify-center px-40"
      >
        <i className="ri-home-4-line mr-2"></i> Back Home
      </button>
    </div>
  );
}

export default FinalPage;
