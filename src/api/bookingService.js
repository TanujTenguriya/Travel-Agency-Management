import API from "./axiosConfig";

export const getUserBookings = async (userId) => {
  try {
    const response = await API.get(`/bookings/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
