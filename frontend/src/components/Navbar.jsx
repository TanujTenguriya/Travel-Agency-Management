// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const username = localStorage.getItem("username"); // Retrieve username
//   const userRole = localStorage.getItem("userRole");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("username");
//     localStorage.removeItem("email");
//     navigate("/login");
//   };
//   const dashboardRoute = userRole === "admin" ? "/admin-dashboard" : "/user-dashboard";
//   return (
//     <nav className="bg-yellow-600 text-black p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-3xl font-bold  ">
//           NexTrip
//         </Link>
//         <div className="space-x-6 flex items-center">
         

//           {token ? (
//             // Show username as a clickable link to dashboard and a logout button
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => navigate(dashboardRoute)} 
//                 className="font-semibold hover:underline"
//               >
//                 {username}
//               </button>
//               <button 
//                 onClick={handleLogout} 
//                 className="bg-red-600 px-3 py-1 rounded text-white"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             // If not logged in, show login and register links
//             <>
//               <Link to="/login" className="hover:underline">
//                 Login
//               </Link>
//               <Link to="/register" className="hover:underline">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const userRole = localStorage.getItem("userRole");

  const dashboardRoute = userRole === "admin" ? "/admin-dashboard" : "/user-dashboard";

  return (
    <nav className="bg-[#001f4d] text-white py-3 shadow-md">
      <div className="flex items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold">
            NexTrip
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="flex-1 flex justify-center space-x-10 text-lg font-medium">
          <Link to="/flights" className="hover:underline">Flights</Link>
          <Link to="/hotels" className="hover:underline">Hotels</Link>
          <Link to="/trains" className="hover:underline">Trains</Link>
          <Link to="/buses" className="hover:underline">Buses</Link>
          <Link to="/packages" className="hover:underline">Holiday Packages</Link>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center space-x-3">
          {token ? (
            <button
              onClick={() => navigate(dashboardRoute)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded font-semibold text-base"
            >
              {username}
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded font-semibold text-base"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded font-semibold text-base"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
