import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  // State to store the tag input
  const [tag, setTag] = useState('');

  // Fetch GIF and loading status from the custom hook
  const { gif, loading, fetchData } = useGif(tag);  // Passing the tag as a parameter to the hook

  // Function to handle input changes
  function changeHandler(event) {
    setTag(event.target.value);
  }

  // Function to fetch data based on the current tag
  function clickHandler(tag) {
    fetchData(tag);  // Passing the current tag to fetchData
    console.log("GIF generated");
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
        Random {tag} GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random GIF" width={450} className="rounded-lg" />
      )}
      <input
        className="w-10/12 text-lg py-2 rounded mb-[20px]"
        onChange={changeHandler}
        value={tag}
        placeholder="Enter a tag"
      />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-green-300 text-lg py-2 rounded mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
