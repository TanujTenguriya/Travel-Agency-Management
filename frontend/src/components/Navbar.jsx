// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           Travel Agency
//         </Link>
//         <div className="space-x-6">
//           <Link to="/packages" className="hover:underline">
//             Packages
//           </Link>
//           <Link to="/booking" className="hover:underline">
//             Booking
//           </Link>
//           <Link to="/login" className="hover:underline">
//             Login
//           </Link>
//           <Link to="/register" className="hover:underline">
//             Register
//           </Link>
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
  const username = localStorage.getItem("username"); // Retrieve username
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/login");
  };
  const dashboardRoute = userRole === "admin" ? "/admin-dashboard" : "/user-dashboard";
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Travel Agency
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/packages" className="hover:underline">
            Packages
          </Link>
          <Link to="/booking" className="hover:underline">
            Booking
          </Link>

          {token ? (
            // Show username as a clickable link to dashboard and a logout button
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate(dashboardRoute)} 
                className="font-semibold hover:underline"
              >
                {username}
              </button>
              <button 
                onClick={handleLogout} 
                className="bg-red-600 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            // If not logged in, show login and register links
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
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
