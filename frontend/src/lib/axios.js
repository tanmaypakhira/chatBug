import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "production" ? "https://chatbug-production.up.railway.app/api" : "/api", withCredentials: true,
});