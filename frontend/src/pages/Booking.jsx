// import React from "react";
// import { useNavigate } from "react-router-dom";
// const Booking = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//     className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
//     style={{
//       backgroundImage: "url('/booking.png')", // No import needed
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//     }}
//   >
//       {/* Overlay for better readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-4xl font-bold mb-6">Book Your Perfect Trip</h1>

//         {/* Navigation Buttons */}
//         <div className="grid grid-cols-2 gap-6">
//           <button
//             onClick={() => navigate("/flights")}
//             className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-xl font-semibold"
//           >
//             ✈ Flights
//           </button>
//           <button
//             onClick={() => navigate("/hotels")}
//             className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg text-xl font-semibold"
//           >
//             🏨 Hotels
//           </button>
//           <button
//             onClick={() => navigate("/trains")}
//             className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg shadow-lg text-xl font-semibold"
//           >
//             🚆 Trains
//           </button>
//           <button
//             onClick={() => navigate("/buses")}
//             className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg text-xl font-semibold"
//           >
//             🚌 Buses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/booking.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔹 Dark Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* 🔹 Booking Content Section */}
      <div className="relative z-10 text-center text-black px-6">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
          ✨ Book Your Perfect Trip ✨
        </h1>
        <p className="text-lg mb-8 text-black-300 animate-fadeIn">
          Get the **best deals** on flights, hotels, trains, and buses.
        </p>

        {/* 🔹 Booking Buttons */}
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
          <button
            onClick={() => navigate("/flights")}
            className="px-8 py-3 bg-blue-500 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out rounded-lg shadow-xl text-xl font-semibold transform hover:scale-105 hover:shadow-blue-500/50"
          >
            ✈ Flights
          </button>
          <button
            onClick={() => navigate("/hotels")}
            className="px-8 py-3 bg-green-500 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out rounded-lg shadow-xl text-xl font-semibold transform hover:scale-105 hover:shadow-green-500/50"
          >
            🏨 Hotels
          </button>
          <button
            onClick={() => navigate("/trains")}
            className="px-8 py-3 bg-red-500 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out rounded-lg shadow-xl text-xl font-semibold transform hover:scale-105 hover:shadow-red-500/50"
          >
            🚆 Trains
          </button>
          <button
            onClick={() => navigate("/buses")}
            className="px-8 py-3 bg-yellow-500 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out rounded-lg shadow-xl text-xl font-semibold transform hover:scale-105 hover:shadow-yellow-500/50"
          >
            🚌 Buses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

