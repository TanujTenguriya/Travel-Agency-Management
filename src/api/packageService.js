import API from "./axiosConfig";

export const getPackages = async () => {
  try {
    const response = await API.get("/packages");
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};
