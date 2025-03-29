import React, { useEffect, useState } from "react";
import { getHotels } from "../api/hotelService";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Fetch hotels on mount
  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await getHotels();
        setHotels(response);
        setFilteredHotels(response); // Initially display all hotels
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    }
    fetchHotels();
  }, []);

  // Handle search by location
  const handleSearch = () => {
    const filtered = hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 🔍 Search Box */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🏨 Find Your Perfect Stay</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter city or hotel name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="p-2 border rounded"
          />
          <div className="flex space-x-4">
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="p-2 border rounded w-24"
              placeholder="Guests"
            />
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="p-2 border rounded w-24"
              placeholder="Rooms"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          🔍 Search Hotels
        </button>
      </div>

      {/* 🏨 Hotels List */}
      <div className="mt-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Showing Properties</h2>

        {filteredHotels.length === 0 ? (
          <p className="text-gray-500">No hotels found.</p>
        ) : (
          filteredHotels.map((hotel) => (
            <div key={hotel._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
              {/* Hotel Images (Max 3) */}
              <div className="w-1/3 flex space-x-2">
                {hotel.images.slice(0, 3).map((image, index) => (
                  <img key={index} src={image} alt="Hotel" className="w-1/3 h-24 object-cover rounded" />
                ))}
              </div>

              {/* Hotel Details */}
              <div className="w-2/3 px-4">
                <h3 className="text-xl font-bold">{hotel.hotelName}</h3>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-yellow-500 font-semibold">⭐ {hotel.rating} / 5</p>
                <p className="text-green-600 font-bold">₹ {hotel.pricePerNight} per night</p>
                <p className="text-gray-500">Available Rooms: {hotel.availableRooms}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hotel;

