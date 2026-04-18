import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.search.active);

  const tabs = ["photo", "videos", "gif"];

  return (
    <div className="flex justify-center gap-4 bg-gray-900 p-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActive(tab))}
          className={`px-6 py-2 text-lg font-medium rounded-full transition duration-300
            ${
              active === tab
                ? "bg-blue-600 text-white"
                : "text-gray-300 border border-gray-700 hover:bg-blue-600 hover:text-white"
            }`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
