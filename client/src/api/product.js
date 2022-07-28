import axios from "axios";

export const createProduct = async (data) => {
  const response = await axios.post("http://localhost:5000/api/product", data, {
    withCredentials: true,
  });

  return response;
};
