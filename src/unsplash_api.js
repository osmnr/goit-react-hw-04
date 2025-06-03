import axios from "axios";

const accessKey = import.meta.env.VITE_API_ACCESS_KEY;
const baseUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}`;

const fetchImages = async (query, page) => {
  const response = await axios.get(`${baseUrl}&query=${query}&page=${page}`);
  console.log("testing:", response);
  return response;
};

export default fetchImages;