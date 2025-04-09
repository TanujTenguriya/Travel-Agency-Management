import React, { useEffect, useState } from "react";
import { getPackages } from "../api/packageService";
import { Link } from "react-router-dom";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [sortOption, setSortOption] = useState(""); // Sorting State

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await getPackages();
        console.log("Fetched Packages:", response);

        // Ensure data is an array before setting state
        if (Array.isArray(response)) {
          setPackages(response);
        } else {
          console.error("Unexpected API response format:", response.data);
          setPackages([]); // Prevent UI crashes
        }
      } catch (error) {
        console.error("Failed to fetch packages:", error);
        setPackages([]); // Ensure state is set even if API fails
      }
    }
    fetchPackages();
  }, []);

  // ✅ Sorting Logic
  const filteredAndSortedPackages = [...packages]
  .filter((pkg) => {
    // ✅ Filter by Destination (toCity)
    if (toCity.trim() === "") return true; // No filter if empty
    return pkg.place.toLowerCase().includes(toCity.toLowerCase());
  })
  .sort((a, b) => {
    // ✅ Sorting Logic
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "priceHighToLow") return b.price - a.price;
    if (sortOption === "duration") return a.duration - b.duration;
    return 0;
  });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Find Your Perfect Package</h2>

      {/* ✅ Search & Sorting Inputs */}
      <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
        {/* From City */}
        <div>
          <label className="block font-semibold">From City</label>
          <input
            type="text"
            placeholder="Enter Departure City"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="border p-2 rounded w-48"
          />
        </div>

        {/* To City / Destination */}
        <div>
          <label className="block font-semibold">To City/Country</label>
          <input
            type="text"
            placeholder="Enter Destination"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
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

      {/* ✅ Display Packages */}
      {filteredAndSortedPackages.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No packages available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredAndSortedPackages.map((pkg) => {
            const nights = pkg.duration - 1; // 3N/4D format
            const durationText = `${nights}N/${pkg.duration}D`;

            return (
              <div key={pkg._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Image (if available) */}
                {pkg.image ? (
                  <img src={pkg.image} alt={pkg.packageName} className="w-full h-52 object-cover" />
                ) : (
                  <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}

                <div className="p-4">
                  {/* Package Title */}
                  <h3 className="text-lg font-bold">{pkg.packageName}</h3>

                  {/* Duration Badge */}
                  <span className="bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                    {durationText}
                  </span>

                  {/* Destination */}
                  <p className="text-gray-600 mt-1"><strong>Destination:</strong> {pkg.place}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mt-2">{pkg.description}</p>

                  {/* Price & Discount */}
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-gray-800">₹{pkg.price}</p>
                    {pkg.discount && (
                      <span className="text-green-600 text-sm">Extra ₹{pkg.discount} off</span>
                    )}
                  </div>

                  {/* Booking Button */}

                  <Link 
                    to="/payment" 
                    state={{ amount: pkg.price,
                      type: "Tour package",
                      id: pkg._id,
                     }} // Pass amount as state
                  >
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                       Book Now
                    </button>
                  </Link>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Packages;
