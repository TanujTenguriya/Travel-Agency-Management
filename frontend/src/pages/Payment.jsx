import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Initialize navigation
  const amount = location.state?.amount || 0; // ✅ Retrieve amount from state

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = () => {
    setPaymentCompleted(true);
  };

  // ✅ Wait 2 seconds after payment and navigate to Home
  useEffect(() => {
    if (paymentCompleted) {
      setTimeout(() => {
        navigate("/"); // ✅ Navigate to Home
      }, 1000);
    }
  }, [paymentCompleted, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">💳 Payment</h2>

        {paymentCompleted ? (
          <p className="text-green-600 font-semibold text-lg">
            ✅ Booking Completed! Redirecting...
          </p>
        ) : (
          <>
            <p className="text-lg text-gray-700 mb-4">
              Amount to Pay: <span className="font-bold text-green-600">₹{amount}</span>
            </p>
            <button
              onClick={handlePayment}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Pay Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
