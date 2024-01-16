import axios from "axios";

export const useAxios = axios.create({
    baseURL: process.env.API_BASE_URL,
})