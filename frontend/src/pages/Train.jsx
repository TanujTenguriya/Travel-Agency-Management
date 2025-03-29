import React, { useEffect, useState } from "react";
import { getTrains } from "../api/trainService";

const Train = () => {
  const [trains, setTrains] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [sortOption, setSortOption] = useState(""); // Sorting state

  // ✅ Fetch train data on component mount
  useEffect(() => {
    async function fetchTrains() {
      try {
        const response = await getTrains();
        console.log("Fetched Trains:", response);

        if (Array.isArray(response)) {
          setTrains(response);
        } else {
          console.error("Unexpected API response format:", response);
          setTrains([]); // Prevent UI crashes
        }
      } catch (error) {
        console.error("Failed to fetch trains:", error);
        setTrains([]);
      }
    }
    fetchTrains();
  }, []);

  // ✅ Filter and sort train data
  const filteredAndSortedTrains = [...trains]
    .filter((train) => {
      // ✅ Filter by destination
      if (to.trim() === "") return true; // No filter if empty
      return train.to.toLowerCase().includes(to.toLowerCase());
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      if (sortOption === "duration") return a.duration - b.duration;
      return 0;
    });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🚆 Find Your Train</h2>

      {/* ✅ Search & Sorting Inputs */}
      <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* From City */}
        <div>
          <label className="block font-semibold">From</label>
          <input
            type="text"
            placeholder="Enter departure city"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-2 rounded w-48"
          />
        </div>

        {/* To City */}
        <div>
          <label className="block font-semibold">To</label>
          <input
            type="text"
            placeholder="Enter destination city"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded w-48"
          />
        </div>

        {/* Departure Date */}
        <div>
          <label className="block font-semibold">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border p-2 rounded w-48"
          />
        </div>

        {/* ✅ Sorting Dropdown */}
        <div>
          <label className="block font-semibold">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-2 rounded w-48"
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price - Low to High</option>
            <option value="priceHighToLow">Price - High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-6 py-2 rounded shadow-lg mt-5">
          SEARCH
        </button>
      </div>

      {/* ✅ Display Train Listings */}
      {filteredAndSortedTrains.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No trains available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredAndSortedTrains.map((train) => (
            <div key={train._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                {/* Train Name */}
                <h3 className="text-lg font-bold">{train.trainName}</h3>

                {/* Route */}
                <p className="text-gray-600 mt-1">
                  <strong>Route:</strong> {train.from} → {train.to}
                </p>

                {/* Duration */}
                <p className="text-gray-600"><strong>Duration:</strong> {train.duration} hrs</p>

                {/* Price */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-gray-800">₹{train.price}</p>
                </div>

                {/* Booking Button */}
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Train;
