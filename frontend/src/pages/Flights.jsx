import { useState } from "react";

const Flights = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [travelers, setTravelers] = useState(1);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Book Your Flight</h2>

        {/* From & To Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">From</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter city"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">To</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Departure</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {/* Travelers */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Travellers</label>
          <div className="flex items-center">
            <button
              className="px-3 py-1 bg-gray-200 rounded-l-md"
              onClick={() => setTravelers(Math.max(1, travelers - 1))}
            >
              -
            </button>
            <input
              type="text"
              className="w-12 text-center border-t border-b p-2"
              readOnly
              value={travelers}
            />
            <button
              className="px-3 py-1 bg-gray-200 rounded-r-md"
              onClick={() => setTravelers(travelers + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Flights;
