import axios from "axios";

// set up axios for instance
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export const fetchProducts = async () => {
    const {data} = await API.get("/products");
    return data;
};

export const insertProducts = async () => {
    const {data} = await API.post("/products");
    return data;
};
