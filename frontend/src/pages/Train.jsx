import React, { useState } from "react";

const Train = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSearch = () => {
    console.log("Searching Trains from", from, "to", to, "on", departureDate);
    // Add API call logic here
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🚆 Book Train Tickets</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <label className="block mb-2 font-semibold">From</label>
        <input
          type="text"
          placeholder="Enter departure city"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">To</label>
        <input
          type="text"
          placeholder="Enter destination city"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          🔍 Search Trains
        </button>
      </div>
    </div>
  );
};

export default Train;
