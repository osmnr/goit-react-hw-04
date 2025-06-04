import axios from "axios";

const accessKey = import.meta.env.VITE_API_ACCESS_KEY;
const baseUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}`;

const fetchImages = async (query, page=1) => {
  const response = await axios.get(`${baseUrl}&query=${query}&page=${page}`);
  return response.data.results;
};

export default fetchImages;