import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submitHandler}
        className="bg-gray-900 flex items-center p-6 gap-3"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border-2 border-gray-700 px-4 py-2 text-xl rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
          type="text"
          placeholder="Search anything..."
        />
        <button
          type="submit"
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
