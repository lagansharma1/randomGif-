import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching data from Giphy API:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
    console.log("GIF generated");
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random GIF</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random GIF" width={450} className="rounded-lg" />
      )}
      <button
        onClick={clickHandler}
        className="w-10/12 bg-green-300 text-lg py-2 rounded mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
