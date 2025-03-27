import React, { useState } from "react";

const Hotel = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    console.log("Searching Hotels in", location, "from", checkIn, "to", checkOut);
    // Add API call logic here
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🏨 Find Your Perfect Stay</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <label className="block mb-2 font-semibold">Location</label>
        <input
          type="text"
          placeholder="Enter city or hotel name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Check-In</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Check-Out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex justify-between mb-4">
          <div>
            <label className="block mb-2 font-semibold">Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-20 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Rooms</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-20 p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          🔍 Search Hotels
        </button>
      </div>
    </div>
  );
};

export default Hotel;
