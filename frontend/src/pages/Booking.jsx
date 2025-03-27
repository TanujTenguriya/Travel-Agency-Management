import React from "react";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const navigate = useNavigate();
  return (
    <div
    className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
    style={{
      backgroundImage: "url('/booking.png')", // No import needed
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Book Your Perfect Trip</h1>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/flights")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-xl font-semibold"
          >
            ✈ Flights
          </button>
          <button
            onClick={() => navigate("/hotels")}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg text-xl font-semibold"
          >
            🏨 Hotels
          </button>
          <button
            onClick={() => navigate("/trains")}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg shadow-lg text-xl font-semibold"
          >
            🚆 Trains
          </button>
          <button
            onClick={() => navigate("/buses")}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg text-xl font-semibold"
          >
            🚌 Buses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

