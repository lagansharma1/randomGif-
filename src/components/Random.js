import axios from "axios";
import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  // Fetch GIF and loading status from the custom hook
  const { gif, loading, fetchData } = useGif();  // No tag is required for this component

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random GIF</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Random GIF" width={450} className="rounded-lg" />
      )}
      <button
        onClick={() => fetchData()}  // No tag is passed here
        className="w-10/12 bg-green-300 text-lg py-2 rounded mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
