import axios from "axios";

export const signup = async (data) => {
  const response = await axios.post("/api/auth/signup", data);

  return response;
};

export const signin = async (data) => {
  const response = await axios.post("/api/auth/signin", data);

  return response;
};
