import React, { useEffect, useState } from "react";
import { getHotels } from "../api/hotelService";
import { Link } from "react-router-dom";
const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to track the main image for each hotel
  const [mainImages, setMainImages] = useState({});

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await getHotels();
        setHotels(response);
        setFilteredHotels(response);

        // Initialize the main image for each hotel
        const initialImages = {};
        response.forEach((hotel) => {
          if (hotel.images && hotel.images.length > 0) {
            initialImages[hotel._id] = hotel.images[0];
          }
        });
        setMainImages(initialImages);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, []);

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
        <ul className="space-y-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading hotels...</p>
          ) : filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div
                key={hotel._id}
                className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row"
              >
                {/* ✅ Hotel Images Section */}
                <div className="w-full md:w-1/3 flex flex-col space-y-2">
                  {hotel.images && hotel.images.length > 0 ? (
                    <>
                      {/* First image (Large) */}
                      <img
                        src={mainImages[hotel._id] || hotel.images[0]}
                        alt="Hotel"
                        className="w-full h-44 object-cover rounded"
                      />

                      {/* Remaining images (Small) */}
                      <div className="grid grid-cols-2 gap-2">
                        {hotel.images.slice(1, 3).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Hotel"
                            className="w-full h-20 object-cover rounded cursor-pointer"
                            onMouseEnter={() =>
                              setMainImages((prevImages) => ({
                                ...prevImages,
                                [hotel._id]: image,
                              }))
                            }
                            onMouseLeave={() =>
                              setMainImages((prevImages) => ({
                                ...prevImages,
                                [hotel._id]: hotel.images[0],
                              }))
                            }
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-44 bg-gray-200 rounded">
                      <span className="text-gray-500">No images available</span>
                    </div>
                  )}
                </div>

                {/* ✅ Hotel Details (Shifted right, increased font size) */}
                <div className="w-full md:w-3/5 pl-10 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold">{hotel.hotelName}</h3>
                  <p className="text-gray-600 text-lg">{hotel.location}</p>
                  <p className="text-yellow-500 font-semibold text-lg">⭐ {hotel.rating} / 5</p>
                  <p className="text-green-600 font-bold text-lg">
                    ₹ {hotel.pricePerNight} per night
                  </p>
                  <p className="text-gray-500 text-md">Available Rooms: {hotel.availableRooms}</p>

                  {/* ✅ Buttons for Edit & Delete */}
                  <div className="mt-2">
                    <Link 
                        to="/payment" 
                        state={{ amount: hotel.pricePerNight }} // Pass amount as state
                        >
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Book Now
                        </button>
                        </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No hotels available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Hotel;
