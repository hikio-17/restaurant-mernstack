import axios from "axios";
export const createCategory = async (formData) => {
  const config = {
    withCredentials: true,
  };
  const response = await axios.post("/api/category", formData, config);

  return response;
};
