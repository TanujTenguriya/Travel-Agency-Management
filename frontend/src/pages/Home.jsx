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
<footer className="mt-20 bg-[#031B4E]/80 text-gray-300 text-center  py-14">
  <p className="text-xl mb-2">Made with ❤️ for Travelers</p>
  <p className="text-xl">© 2025 TravelNow. All rights reserved.</p>
</footer>
</div>

  );
};

export default Home;
