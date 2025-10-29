import { useState } from "react";

function CardBhutan({ title, onsubmit }) {
  const [alldata, setAlldata] = useState({
    direct: '',
    house: '',
    ending: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:');
    console.log('Data:', alldata);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
      
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
            {title}
        </h1>
      </div>

      <form className="mt-6 space-y-6" onSubmit={onsubmit || handleSubmit}>
        {/* Result Input */}
        <div className="space-y-2">
          <label htmlFor={`direct-${title}`} className="text-sm font-medium text-gray-700">
            Direct
          </label>
          <input
            id={`direct-${title}`}
            name="direct"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter the result"
            value={alldata.direct}
            onChange={(e) => setAlldata({ ...alldata, direct: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={`house-${title}`} className="text-sm font-medium text-gray-700">
            House
          </label>
          <input
            id={`house-${title}`}
            name="house"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter the result"
            value={alldata.house}
            onChange={(e) => setAlldata({ ...alldata, house: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={`ending-${title}`} className="text-sm font-medium text-gray-700">
            Ending
          </label>
          <input
            id={`ending-${title}`}
            name="ending"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter the result"
            value={alldata.ending}
            onChange={(e) => setAlldata({ ...alldata, ending: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full cursor-pointer px-4 py-3 font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-opacity-50 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardBhutan;