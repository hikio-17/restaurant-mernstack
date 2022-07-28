import axios from "axios";
export const createCategory = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/category",
    formData,
    { withCredentials: true }
  );

  return response;
};

export const getCategories = async () => {
  const response = await axios.get("http://localhost:5000/api/category");

  return response;
};
