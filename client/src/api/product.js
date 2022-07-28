import axios from "axios";

export const createProduct = async (data) => {
  const config = {
    withCredentials: true,
  };
  const response = await axios.post(
    "http://localhost:5000/api/product",
    data,
    config
  );

  return response;
};
