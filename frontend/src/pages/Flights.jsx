import React, { useEffect, useState } from "react";
import { getFlights } from "../api/flightService";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchFlights() {
      try {
        const response = await getFlights();
        console.log("Fetched Flights:", response);

        if (Array.isArray(response)) {
          setFlights(response);
        } else {
          console.error("Unexpected API response format:", response);
          setFlights([]);
        }
      } catch (error) {
        console.error("Failed to fetch flights:", error);
        setFlights([]);
      }
    }
    fetchFlights();
  }, []);

  // ✅ Filtering & Sorting Logic
  const filteredAndSortedFlights = [...flights]
    .filter((flight) => {
      if (from.trim() && !flight.from.toLowerCase().includes(from.toLowerCase())) return false;
      if (to.trim() && !flight.to.toLowerCase().includes(to.toLowerCase())) return false;
      if (departure && flight.departureDate !== departure) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      if (sortOption === "duration") return a.duration - b.duration;
      return 0;
    });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Find Your Flight</h2>

      {/* ✅ Search & Sorting Inputs */}
      <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* From City */}
        <div>
          <label className="block font-semibold">From</label>
          <input
            type="text"
            placeholder="Enter Departure City"
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
            placeholder="Enter Destination"
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
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
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

      {/* ✅ Display Flights */}
      {filteredAndSortedFlights.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No flights available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredAndSortedFlights.map((flight) => (
            <div key={flight._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                {/* Flight Details */}
                <h3 className="text-lg font-bold">{flight.airline}</h3>
                <p className="text-gray-600"><strong>From:</strong> {flight.from}</p>
                <p className="text-gray-600"><strong>To:</strong> {flight.to}</p>
                <p className="text-gray-600"><strong>Departure:</strong> {flight.departureDate}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {flight.duration} hrs</p>

                {/* Price & Booking Button */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-gray-800">₹{flight.price}</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flights;

