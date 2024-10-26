import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  // API URLs based on the presence of the tag
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  // Function to fetch data from Giphy API
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      console.log(imageSource);
    } catch (error) {
      console.error("Error fetching data from Giphy API:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a GIF when the hook is initialized or the tag changes
  useEffect(() => {
    fetchData();
  }, [tag]); // Re-run fetchData when the tag changes

  return { gif, loading, fetchData };
};

export default useGif;
