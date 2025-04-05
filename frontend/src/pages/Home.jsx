// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* 🔹 Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
        
//       <div className="flex space-x-6">
//   <Link to="/packages" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
//     Packages
//   </Link>
//   <Link to="/flights" className="text-gray-700 hover:text-blue-600">
//     Flights
//   </Link>
//   <Link to="/hotels" className="text-gray-700 hover:text-blue-600">
//     Hotels
//   </Link>
//   <Link to="/trains" className="text-gray-700 hover:text-blue-600">
//     Trains
//   </Link>
//   <Link to="/buses" className="text-gray-700 hover:text-blue-600">
//     Buses
//   </Link>
// </div>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Login / Signup
//         </button>
//       </header>

//       {/* 🔹 Hero Section */}
//       <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/image.png')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">Book Your Perfect Trip</h1>
//           <p className="text-gray-300">Best deals on flights, hotels, and more</p>
//         </div>
//       </div>

//       {/* 🔹 Search Section */}
//       <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Find Your Journey</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="From (e.g., Delhi)"
//             className="p-2 border rounded w-full"
//           />
//           <input
//             type="text"
//             placeholder="To (e.g., Bengaluru)"
//             className="p-2 border rounded w-full"
//           />
//           <input
//             type="date"
//             className="p-2 border rounded w-full"
//           />
//           <select className="p-2 border rounded w-full">
//             <option>1 Traveler</option>
//             <option>2 Travelers</option>
//             <option>3 Travelers</option>
//           </select>
//         </div>
//         <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           🔍 Search
//         </button>
//       </div>

//       {/* 🔹 Footer */}
//       <footer className="mt-10 text-center text-gray-500">
//         © 2025 Travel Agency. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* 🔹 Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between px-10">
//         <div className="text-3xl font-bold text-blue-600">
//           make<span className="text-red-500">my</span>trip
//         </div>
//         <nav className="flex space-x-6">
//           <Link to="/flights" className="text-gray-700 hover:text-blue-600 font-medium transition">Flights</Link>
//           <Link to="/hotels" className="text-gray-700 hover:text-blue-600 font-medium transition">Hotels</Link>
//           <Link to="/trains" className="text-gray-700 hover:text-blue-600 font-medium transition">Trains</Link>
//           <Link to="/buses" className="text-gray-700 hover:text-blue-600 font-medium transition">Buses</Link>
//           <Link to="/cabs" className="text-gray-700 hover:text-blue-600 font-medium transition">Cabs</Link>
//         </nav>
//         <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
//           Login / Signup
//         </Link>
//       </header>

//       {/* 🔹 Hero Section */}
//       <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" 
//         style={{ backgroundImage: "url('/mnt/data/image.png')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-5xl font-extrabold mb-2">Plan Your Dream Trip</h1>
//           <p className="text-gray-300 text-lg">Exclusive deals on flights, hotels, and more!</p>
//           <Link to="/packages" className="mt-4 bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
//             Explore Packages ✈️
//           </Link>
//         </div>
//       </div>

//       {/* 🔹 Search Section */}
//       <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Find Your Journey</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input type="text" placeholder="From (e.g., Delhi)" className="p-3 border rounded-lg w-full shadow-sm" />
//           <input type="text" placeholder="To (e.g., Bengaluru)" className="p-3 border rounded-lg w-full shadow-sm" />
//           <input type="date" className="p-3 border rounded-lg w-full shadow-sm" />
//           <select className="p-3 border rounded-lg w-full shadow-sm">
//             <option>1 Traveler</option>
//             <option>2 Travelers</option>
//             <option>3 Travelers</option>
//           </select>
//           <select className="p-3 border rounded-lg w-full shadow-sm">
//             <option>Economy</option>
//             <option>Business</option>
//             <option>First Class</option>
//           </select>
//           <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full">
//             🔍 Search
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Offers Section */}
//       <div className="max-w-6xl mx-auto mt-12 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">🔥 Best Deals & Offers</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold mb-2">✈️ Flight Discounts</h3>
//             <p className="text-gray-600">Save up to 30% on international flights</p>
//             <button className="mt-3 text-blue-600 font-semibold hover:underline">View Deals →</button>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold mb-2">🏨 Hotel Offers</h3>
//             <p className="text-gray-600">Flat 20% off on luxury hotels</p>
//             <button className="mt-3 text-blue-600 font-semibold hover:underline">Explore Now →</button>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold mb-2">🚆 Train Discounts</h3>
//             <p className="text-gray-600">Up to ₹500 off on train tickets</p>
//             <button className="mt-3 text-blue-600 font-semibold hover:underline">Check Now →</button>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Footer */}
//       <footer className="mt-16 bg-gray-900 text-white text-center py-6">
//         <p>© 2025 Travel Agency. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaTrain, FaBus,  FaUserCircle,FaGlobeEurope } from "react-icons/fa";

const Home = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Navbar */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between px-8">
       
        <div className="flex space-x-6 text-lg">
          <Link to="/flights" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaPlane /> <span>Flights</span>
          </Link>
          <Link to="/hotels" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaHotel /> <span>Hotels</span>
          </Link>
          <Link to="/trains" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaTrain /> <span>Trains</span>
          </Link>
          <Link to="/buses" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaBus /> <span>Buses</span>
          </Link>
          <Link to="/packages" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaGlobeEurope /> <span>Holiday Packages</span>
          </Link>
        
        </div>
        
      </header>

      {/* 🔹 Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/image.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-extrabold">Find Your Next Adventure</h1>
          <p className="text-gray-300 text-lg mt-2">Book flights, hotels, and transport at the best prices</p>
          <Link to="/booking">
  <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all">
    Explore Now
  </button>
</Link>

        </div>
      </div>

      {/* 🔹 Search Section */}
      {/* <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Search for the Best Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="From (e.g., Delhi)"
            className="p-3 border rounded w-full text-lg"
          />
          <input
            type="text"
            placeholder="To (e.g., Bengaluru)"
            className="p-3 border rounded w-full text-lg"
          />
          <input
            type="date"
            className="p-3 border rounded w-full text-lg"
          />
          <select className="p-3 border rounded w-full text-lg">
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
          </select>
          <select className="p-3 border rounded w-full text-lg">
            <option>Economy</option>
            <option>Business</option>
          </select>
          <button className="col-span-1 md:col-span-3 bg-blue-600 text-white py-3 rounded-lg text-xl hover:bg-blue-700">
            🔍 Search
          </button>
        </div>
      </div> */}

      {/* 🔹 Features Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <FaPlane className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Best Flight Deals</h3>
          <p className="text-gray-600 mt-2">Compare and book flights with ease</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <FaHotel className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Luxury & Budget Hotels</h3>
          <p className="text-gray-600 mt-2">Find hotels that fit your needs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <FaBus className="text-blue-500 text-5xl mx-auto mb-4" />
    <h3 className="text-xl font-bold">Comfortable Bus Trips</h3>
    <p className="text-gray-600 mt-2">Explore intercity travel options by bus</p>
  </div>

      </div>

      {/* 🔹 Footer */}
      <footer className="mt-16 bg-gray-900 text-gray-400 text-center py-6">
       
        <p className="mt-2">Made with ❤️ for Travelers</p>
      </footer>
    </div>
  );
};

export default Home;
