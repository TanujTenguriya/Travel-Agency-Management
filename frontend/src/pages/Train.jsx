// import React, { useEffect, useState } from "react";
// import { getTrains } from "../api/trainService";
// import { Link } from "react-router-dom";
// const Train = () => {
//   const [trains, setTrains] = useState([]);
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [departureDate, setDepartureDate] = useState("");
//   const [sortOption, setSortOption] = useState(""); // Sorting state

//   // ✅ Fetch train data on component mount
//   useEffect(() => {
//     async function fetchTrains() {
//       try {
//         const response = await getTrains();
//         console.log("Fetched Trains:", response);

//         if (Array.isArray(response)) {
//           setTrains(response);
//         } else {
//           console.error("Unexpected API response format:", response);
//           setTrains([]); // Prevent UI crashes
//         }
//       } catch (error) {
//         console.error("Failed to fetch trains:", error);
//         setTrains([]);
//       }
//     }
//     fetchTrains();
//   }, []);

//   // ✅ Filter and sort train data
//   const filteredAndSortedTrains = [...trains]
//     .filter((train) => {
//       // ✅ Filter by destination
//       if (to.trim() === "") return true; // No filter if empty
//       return train.to.toLowerCase().includes(to.toLowerCase());
//     })
//     .sort((a, b) => {
//       if (sortOption === "priceLowToHigh") return a.price - b.price;
//       if (sortOption === "priceHighToLow") return b.price - a.price;
//       if (sortOption === "duration") return a.duration - b.duration;
//       return 0;
//     });

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">🚆 Find Your Train</h2>

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

//       {/* ✅ Display Train Listings */}
//       {filteredAndSortedTrains.length === 0 ? (
//         <p className="text-center text-gray-500 mt-6">No trains available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//   {filteredAndSortedTrains.map((train) => (
//     <div key={train._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="p-4">
//         {/* Train Name */}
//         <h3 className="text-lg font-bold">{train.trainName}</h3>

//         {/* Route */}
//         <p className="text-gray-600 mt-1">
//           <strong>Route:</strong> {train.from} → {train.to}
//         </p>

//         {/* Departure & Arrival Time */}
//         <p className="text-gray-600">
//           <strong>Departure:</strong> {train.departureTime}
//         </p>
//         <p className="text-gray-600">
//           <strong>Arrival:</strong> {train.arrivalTime}
//         </p>

//         {/* Duration */}
//         <p className="text-gray-600">
//           <strong>Duration:</strong> {train.duration}
//         </p>
//         <p className="text-gray-600">
//         <strong>Date:</strong> {departureDate}
//         </p>

//         {/* Price & Seats Available */}
//         <div className="flex justify-between items-center mt-4">
//           <p className="text-xl font-bold text-gray-800">₹{train.price}</p>
//           <p className="text-sm text-gray-700">
//             <strong>Seats Available:</strong> {train.seatsAvailable}
//           </p>
//         </div>

//         {/* Booking Button */}
//         <Link 
//           to="/payment" 
//           state={{ amount: train.price }} // Pass amount as state
//           >
//           <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//            Book Now
//           </button>
//           </Link>
//       </div>
//     </div>
//   ))}
// </div>
//       )}
//     </div>
//   );
// };

// export default Train;
import React, { useEffect, useState } from "react";
import { getTrains } from "../api/trainService";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrain, FaSearch, FaRupeeSign, FaClock } from "react-icons/fa";

const Train = () => {
  const [trains, setTrains] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchTrains() {
      try {
        const response = await getTrains();
        if (Array.isArray(response)) {
          setTrains(response);
        } else {
          console.error("Unexpected API response format:", response);
          setTrains([]);
        }
      } catch (error) {
        console.error("Failed to fetch trains:", error);
        setTrains([]);
      }
    }
    fetchTrains();
  }, []);

  const filteredAndSortedTrains = [...trains]
    .filter((train) => {
      if (to.trim() === "") return true;
      return train.to.toLowerCase().includes(to.toLowerCase());
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      if (sortOption === "duration") return a.duration - b.duration;
      return 0;
    });

  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8 text-blue-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚆 Explore Available Trains
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 bg-white/80 p-6 rounded-xl shadow-2xl backdrop-blur-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <label className="block font-semibold mb-1">From</label>
          <input
            type="text"
            placeholder="Departure city"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">To</label>
          <input
            type="text"
            placeholder="Destination city"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None</option>
            <option value="priceLowToHigh">Price - Low to High</option>
            <option value="priceHighToLow">Price - High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105">
          <FaSearch /> SEARCH
        </button>
      </motion.div>

      {filteredAndSortedTrains.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">No trains available.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {filteredAndSortedTrains.map((train) => (
            <motion.div
              key={train._id}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                <FaTrain className="inline-block mr-2" />{train.trainName}
              </h3>
              <p className="text-gray-700 mb-1">
                <strong>Route:</strong> {train.from} → {train.to}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Departure:</strong> {train.departureTime}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Arrival:</strong> {train.arrivalTime}
              </p>
              <p className="text-gray-700 mb-1">
                <strong><FaClock className="inline-block mr-1" />Duration:</strong> {train.duration}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Date:</strong> {departureDate || "N/A"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl text-green-600 font-bold">
                  <FaRupeeSign className="inline-block mr-1" />{train.price}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Seats:</strong> {train.seatsAvailable}
                </p>
              </div>
              <Link to="/payment" state={{ amount: train.price,
                type: "Train",
                id: train._id,
               }}>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300">
                  Book Now
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Train;
