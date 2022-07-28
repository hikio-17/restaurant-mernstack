import axios from "axios";

export const signup = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/signup",
    data
  );

  return response;
};

export const signin = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/signin",
    data
  );

  return response;
};
