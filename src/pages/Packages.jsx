import React, { useEffect, useState } from "react";
import { getPackages } from "../api/packageService";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const data = await getPackages();
      setPackages(data);
    }
    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Available Packages</h2>
      <ul className="grid grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <li key={pkg._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p>Price: ${pkg.price}</p>
            <p>Duration: {pkg.duration} days</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;

