import axios from "axios";



const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";


export const fetchTreks = async () => {
    return (await axios(`${API_URL}/treks`)).data;
  };
  

  export const fetchTrekDetails = async (trekId) => {
    return (await axios(`${API_URL}/treks/${trekId}`)).data;
  };