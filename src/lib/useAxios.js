import axios from "axios";

export const useAxios = axios.create({
    baseURL: "https://recipe-server-orcin.vercel.app",
})