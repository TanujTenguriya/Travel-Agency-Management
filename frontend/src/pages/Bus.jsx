// import React, { useEffect, useState } from "react";
// import { getBuses } from "../api/busService";
// import { Link } from "react-router-dom";
// const Bus = () => {
//   const [buses, setBuses] = useState([]);
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [departureDate, setDepartureDate] = useState("");
//   const [sortOption, setSortOption] = useState(""); // Sorting state

//   // ✅ Fetch bus data on component mount
//   useEffect(() => {
//     async function fetchBuses() {
//       try {
//         const response = await getBuses();
//         console.log("Fetched Buses:", response);

//         if (Array.isArray(response)) {
//           setBuses(response);
//         } else {
//           console.error("Unexpected API response format:", response);
//           setBuses([]); // Prevent UI crashes
//         }
//       } catch (error) {
//         console.error("Failed to fetch buses:", error);
//         setBuses([]);
//       }
//     }
//     fetchBuses();
//   }, []);

//   // ✅ Filter and sort bus data
//   const filteredAndSortedBuses = [...buses]
//   .filter((bus) => {
//     if (from.trim() && !bus.from.toLowerCase().includes(from.toLowerCase())) return false;
//     if (to.trim() && !bus.to.toLowerCase().includes(to.toLowerCase())) return false;
//     return true;
//   })
//     .sort((a, b) => {
//       if (sortOption === "priceLowToHigh") return a.price - b.price;
//       if (sortOption === "priceHighToLow") return b.price - a.price;
//       if (sortOption === "duration") return a.duration - b.duration;
//       return 0;
//     });

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">🚌 Find Your Bus</h2>

//       {/* ✅ Search & Sorting Inputs */}
//       <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
//         {/* From City */}
//         <div>
//           <label className="block font-semibold">From</label>
//           <input
//             type="text"
//             placeholder="Enter departure city"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             className="border p-2 rounded w-48"
//           />
//         </div>

//         {/* To City */}
//         <div>
//           <label className="block font-semibold">To</label>
//           <input
//             type="text"
//             placeholder="Enter destination city"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             className="border p-2 rounded w-48"
//           />
//         </div>

//         {/* Departure Date */}
//         <div>
//           <label className="block font-semibold">Departure Date</label>
//           <input
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//             className="border p-2 rounded w-48"
//           />
//         </div>

//         {/* ✅ Sorting Dropdown */}
//         <div>
//           <label className="block font-semibold">Sort By</label>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="border p-2 rounded w-48"
//           >
//             <option value="">Sort By</option>
//             <option value="priceLowToHigh">Price - Low to High</option>
//             <option value="priceHighToLow">Price - High to Low</option>
//             <option value="duration">Duration</option>
//           </select>
//         </div>

//         {/* Search Button */}
//         <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-6 py-2 rounded shadow-lg mt-5">
//           SEARCH
//         </button>
//       </div>

//       {/* ✅ Display Bus Listings */}
//       {filteredAndSortedBuses.length === 0 ? (
//         <p className="text-center text-gray-500 mt-6">No buses available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {filteredAndSortedBuses.map((bus) => (
//             <div key={bus._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="p-4">
//                 {/* Bus Name */}
//                 <h3 className="text-lg font-bold">{bus.busName}</h3>

//                 {/* Route */}
//                 <p className="text-gray-600 mt-1">
//                   <strong>Route:</strong> {bus.from} → {bus.to}
//                 </p>

//                 {/* Duration */}
//                 <p className="text-gray-600"><strong>Date:</strong> {departureDate} </p>
//                 <p className="text-gray-600"><strong>Duration:</strong> {bus.duration} hrs</p>
//                 <p className="text-gray-600"><strong>Departure Time:</strong> {bus.departureTime} </p>
//                 <p className="text-gray-600"><strong>Arrival Time:</strong> {bus.arrivalTime} </p>
//                 <p className="text-gray-600"><strong>Seats Available:</strong> {bus.seatsAvailable}</p>

//                 {/* Price */}
//                 <div className="flex justify-between items-center mt-4">
//                   <p className="text-xl font-bold text-gray-800">₹{bus.price}</p>
//                 </div>

//                 {/* Booking Button */}
//                 <Link 
//                     to="/payment" 
//                     state={{ amount: bus.price }} // Pass amount as state
//                     >
//                     <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                         Book Now
//                     </button>
//                     </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bus;
import React, { useEffect, useState } from "react";
import { getBuses } from "../api/busService";
import { Link } from "react-router-dom";

const Bus = () => {
  const [buses, setBuses] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [sortOption, setSortOption] = useState("");

  // ✅ Fetch bus data
  useEffect(() => {
    async function fetchBuses() {
      try {
        const response = await getBuses();
        console.log("Fetched Buses:", response);
        setBuses(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("Failed to fetch buses:", error);
        setBuses([]);
      }
    }
    fetchBuses();
  }, []);

  // ✅ Filter and Sort buses
  const filteredAndSortedBuses = [...buses]
    .filter((bus) => {
      if (from.trim() && !bus.from.toLowerCase().includes(from.toLowerCase())) return false;
      if (to.trim() && !bus.to.toLowerCase().includes(to.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      if (sortOption === "duration") return a.duration - b.duration;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      {/* 🔹 Title */}
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8 animate-fadeIn">
        🚌 Find Your Perfect Bus
      </h2>

      {/* 🔹 Search & Sorting Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-6 rounded-xl shadow-lg animate-slideIn">
        <div>
          <label className="block font-semibold text-gray-700">From</label>
          <input
            type="text"
            placeholder="Enter departure city"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-3 rounded w-52 shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">To</label>
          <input
            type="text"
            placeholder="Enter destination city"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-3 rounded w-52 shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border p-3 rounded w-52 shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-3 rounded w-52 shadow-sm focus:ring focus:ring-blue-300"
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price - Low to High</option>
            <option value="priceHighToLow">Price - High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded shadow-lg transition transform hover:scale-105">
          🔍 SEARCH
        </button>
      </div>

      {/* 🔹 Bus Listings */}
      {filteredAndSortedBuses.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg animate-fadeIn">
          No buses available. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredAndSortedBuses.map((bus) => (
            <div
              key={bus._id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn"
            >
              {/* 🔹 Bus Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800">{bus.busName}</h3>
                <p className="text-gray-600 mt-1">
                  <strong>Route:</strong> {bus.from} → {bus.to}
                </p>
                <p className="text-gray-600"><strong>Date:</strong> {departureDate}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {bus.duration} hrs</p>
                <p className="text-gray-600"><strong>Departure:</strong> {bus.departureTime}</p>
                <p className="text-gray-600"><strong>Arrival:</strong> {bus.arrivalTime}</p>
                <p className="text-gray-600"><strong>Seats Available:</strong> {bus.seatsAvailable}</p>

                {/* 🔹 Price & Booking */}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-2xl font-extrabold text-gray-800">₹{bus.price}</p>
                </div>

                {/* 🔹 Book Now Button */}
                <Link to="/payment" state={{ amount: bus.price }}>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-blue-500/50">
                    🚀 Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bus;
