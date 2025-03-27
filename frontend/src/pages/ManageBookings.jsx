import React, { useEffect, useState } from "react";
import { getBookings, updateBooking, deleteBooking } from "../api/bookingService";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editBooking, setEditBooking] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const data = await getBookings();
    setBookings(data);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (booking.from && booking.from.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (booking.to && booking.to.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleEdit = (booking) => {
    setEditBooking(booking._id);
    setFormData({ ...booking });
  };

  const handleUpdate = async () => {
    await updateBooking(editBooking, formData);
    setEditBooking(null);
    fetchBookings();
  };

  const handleDelete = async (id) => {
    await deleteBooking(id);
    fetchBookings();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Manage Bookings</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by user, type (bus, train, flight, hotel), or destination..."
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Bookings Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">User</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">From</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Seats/Rooms</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking._id} className="border">
                <td className="border p-2">{booking.user}</td>
                <td className="border p-2 capitalize">{booking.type}</td>
                <td className="border p-2">{booking.from || "-"}</td>
                <td className="border p-2">{booking.to || "-"}</td>
                <td className="border p-2">${booking.price}</td>
                <td className="border p-2">{booking.seatsAvailable || booking.availableRooms}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(booking)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Booking Form */}
      {editBooking && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold mb-2">Edit Booking</h3>
          <input
            type="text"
            placeholder="User"
            value={formData.user}
            onChange={(e) => setFormData({ ...formData, user: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="From"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="To"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            placeholder="Seats Available / Rooms Available"
            value={formData.seatsAvailable || formData.availableRooms}
            onChange={(e) =>
              setFormData({
                ...formData,
                seatsAvailable: formData.seatsAvailable ? e.target.value : undefined,
                availableRooms: formData.availableRooms ? e.target.value : undefined,
              })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
          <button
            onClick={() => setEditBooking(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageBookings;
