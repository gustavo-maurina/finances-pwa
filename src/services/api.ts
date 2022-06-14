import axios from "axios";

export const API = axios.create({
  baseURL: "https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test",
  headers: {
    "Content-Type": "application/json",
  },
});
