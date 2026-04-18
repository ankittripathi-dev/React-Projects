import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCollection, removeFromCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item, type }) => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const isSaved = collection.some((i) => i.id === item.id && i.type === type);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeFromCollection({ id: item.id, type }));
    } else {
      dispatch(addToCollection({ ...item, type }));
    }
  };

  const getMediaUrl = () => {
    if (type === "photo") {
      return item.urls.small;
    } else if (type === "videos") {
      return item.image;
    } else if (type === "gif") {
      return item.images.fixed_height.url;
    }
  };

  const getTitle = () => {
    if (type === "photo") {
      return item.alt_description || "Photo";
    } else if (type === "videos") {
      return item.user.name || "Video";
    } else if (type === "gif") {
      return item.title || "GIF";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={getMediaUrl()}
        alt={getTitle()}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{getTitle()}</h3>
        <button
          onClick={handleSave}
          className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
            isSaved
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isSaved ? "Remove from Collection" : "Save to Collection"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
