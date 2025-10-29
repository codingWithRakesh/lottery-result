import { useState } from "react";

function Card({ title, onsubmit }) {
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:');
    console.log('Result:', result);
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
          <label htmlFor={`result-${title}`} className="text-sm font-medium text-gray-700">
            Result
          </label>
          <input
            id={`result-${title}`}
            name="result"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter the result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
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

export default Card;