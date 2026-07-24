import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

export const analyzeWebsite = async (url) => {
  const response = await API.post("/analyze", {
    url,
  });

  return response.data;
};