// import React from "react";
// import { Link } from "react-router-dom";
// import { FaPlane, FaHotel, FaTrain, FaBus,  FaUserCircle,FaGlobeEurope } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* 🔹 Navbar */}
//       <header className="bg-white shadow-md p-4 flex items-center justify-between px-8">
       
//         <div className="flex space-x-6 text-lg">
//           <Link to="/flights" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <FaPlane /> <span>Flights</span>
//           </Link>
//           <Link to="/hotels" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <FaHotel /> <span>Hotels</span>
//           </Link>
//           <Link to="/trains" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <FaTrain /> <span>Trains</span>
//           </Link>
//           <Link to="/buses" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <FaBus /> <span>Buses</span>
//           </Link>
//           <Link to="/packages" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <FaGlobeEurope /> <span>Holiday Packages</span>
//           </Link>
        
//         </div>
        
//       </header>

//       {/* 🔹 Hero Section */}
//       <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/assets/Home.jpg')" }}>
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-black text-5xl font-extrabold">Find Your Next Adventure
         
  
//           </h1>
//           <p className="text-gray-300 text-lg mt-2">Book flights, hotels, and transport at the best prices</p>
//           <Link to="/booking">
//   <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all">
//     Explore Now
//   </button>
// </Link>

//         </div>
//       </div>

//       {/* 🔹 Features Section */}
//       <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//   <Link to="/flights" className="block">
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
//       <FaPlane className="text-blue-500 text-5xl mx-auto mb-4" />
//       <h3 className="text-xl font-bold">Best Flight Deals</h3>
//       <p className="text-gray-600 mt-2">Compare and book flights with ease</p>
//     </div>
//   </Link>

//   <Link to="/hotels" className="block">
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
//       <FaHotel className="text-blue-500 text-5xl mx-auto mb-4" />
//       <h3 className="text-xl font-bold">Luxury & Budget Hotels</h3>
//       <p className="text-gray-600 mt-2">Find hotels that fit your needs</p>
//     </div>
//   </Link>

//   <Link to="/buses" className="block">
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
//       <FaBus className="text-blue-500 text-5xl mx-auto mb-4" />
//       <h3 className="text-xl font-bold">Comfortable Bus Trips</h3>
//       <p className="text-gray-600 mt-2">Explore intercity travel options by bus</p>
//     </div>
//   </Link>
// </div>

//       {/* 🔹 Footer */}
//       <footer className="mt-16 bg-gray-900 text-gray-400 text-center py-6">
       
//         <p className="mt-2">Made with ❤️ for Travelers</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaPlane, FaHotel, FaTrain, FaBus } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* 🔹 Hero Section */}
//       <div
//         className="relative h-screen bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/bg-hero.png')",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#031b4e]/70 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
//             Find Your Next <br /> Adventure
//           </h1>
//           <p className="text-white text-lg mt-3">
//             Book flights, hotels and trains at the best prices
//           </p>
//           <Link to="/booking">
//             <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg transition-all">
//               Explore Now
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* 🔹 Features */}
//       <div className="max-w-6xl mx-auto -mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
//         <Link to="/flights" className="block">
//           <div className="bg-[#031B4E] text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer text-center">
//             <FaPlane className="text-yellow-400 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-bold">Best Flight Deals</h3>
//           </div>
//         </Link>

//         <Link to="/hotels" className="block">
//           <div className="bg-[#031B4E] text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer text-center">
//             <FaHotel className="text-yellow-400 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-bold">Luxury & Budget Hotels</h3>
//           </div>
//         </Link>

//         <Link to="/buses" className="block">
//           <div className="bg-[#031B4E] text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer text-center">
//             <FaBus className="text-yellow-400 text-4xl mx-auto mb-4" />
//             <h3 className="text-xl font-bold">Comfortable Bus Trips</h3>
//           </div>
//         </Link>
//       </div>

//       {/* 🔹 Footer */}
//       <footer className="mt-24 bg-[#031B4E] text-gray-300 text-center py-6">
//         <p className="text-sm">Made with ❤️ for Travelers</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaPlaneDeparture, FaHotel, FaBus } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-[#001f4d] text-white font-sans">
//       {/* 🔹 Hero Section */}
//       <div
//         className="relative h-[70vh] bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/bg-hero.png')",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#001f4d]/80 flex flex-col justify-center items-start px-8 md:px-24">
//           {/* Animated Heading */}
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold leading-tight animate-pulse text-yellow-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           >
//             Find Your Next <br /> Adventure
//           </motion.h1>

//           <p className="text-lg md:text-xl mt-4">
//             Book flights, hotels and trains at the best prices
//           </p>

//           <Link to="/booking">
//             <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg shadow-md">
//               Explore Now
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* 🔹 Feature Cards */}
//       <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-[#002a6d] rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300">
//           <FaPlaneDeparture className="text-4xl mb-4" />
//           <p className="text-lg font-semibold">Best Flight Deals</p>
//         </div>

//         <div className="bg-[#002a6d] rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300">
//           <FaHotel className="text-4xl mb-4" />
//           <p className="text-lg font-semibold">Luxury & Budget Hotels</p>
//         </div>

//         <div className="bg-[#002a6d] rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300">
//           <FaBus className="text-4xl mb-4" />
//           <p className="text-lg font-semibold">Comfortable Bus Trips</p>
//         </div>
//       </div>

//       {/* 🔹 Footer */}
//       <footer className="mt-24 bg-[#031B4E] text-gray-300 text-center py-6">
//         <p className="text-sm">Made with ❤️ for Travelers</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaHotel, FaBus } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover  text-white font-sans"
      style={{
        backgroundImage: "url('/assets/bg-hero.png')",
        backgroundPosition: "top 35% center",
      }}
    >
      {/* 🔹 Hero Section with Overlay */}
      <div className="relative h-[90vh]">
        <div className="absolute inset-0 bg-[#001f4d]/0 flex flex-col justify-center items-start px-8 md:px-24">
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-tight animate-pulse text-white-400"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            Find Your Next <br /> Adventure
          </motion.h1>

          <p className="text-lg md:text-2xl mt-4">
            Book flights, hotels and trains at the best prices
          </p>

          <Link to="/booking">
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-2xl shadow-md">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 Feature Cards */}
      
      <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
  <Link to="/flights" className="block">
    <div className="bg-[#002a6d] bg-opacity-90 rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <FaPlaneDeparture className="text-4xl mb-4" />
      <p className="text-lg font-semibold">Best Flight Deals</p>
    </div>
  </Link>

  <Link to="/hotels" className="block">
    <div className="bg-[#002a6d] bg-opacity-90 rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <FaHotel className="text-4xl mb-4" />
      <p className="text-lg font-semibold">Luxury & Budget Hotels</p>
    </div>
  </Link>

  <Link to="/buses" className="block">
    <div className="bg-[#002a6d] bg-opacity-90 rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <FaBus className="text-4xl mb-4" />
      <p className="text-lg font-semibold">Comfortable Bus Trips</p>
    </div>
  </Link>
</div>
<footer className="mt-24 bg-[#031B4E]/80 text-gray-300 text-center  py-14">
  <p className="text-xl mb-2">Made with ❤️ for Travelers</p>
  <p className="text-xl">© 2025 TravelNow. All rights reserved.</p>
</footer>
</div>

  );
};

export default Home;
