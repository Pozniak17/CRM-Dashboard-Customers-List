import axios from "axios";

axios.defaults.baseURL = "https://66daaa9ef47a05d55be57f7c.mockapi.io";

export const fetchQuery = async () => {
  try {
    const response = await axios.get("/users");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Можливо, ви хочете кинути помилку далі для обробки в іншому місці
  }
};
