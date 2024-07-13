import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-tasklist.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
