import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ResultCard from "../components/ResultCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-2xl font-bold">My Collection</h1>
        <Link to="/" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
          Back to Search
        </Link>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {collection.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Your collection is empty. Start saving some media!</p>
            <Link to="/" className="mt-4 inline-block px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
              Go to Search
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collection.map((item) => (
              <ResultCard key={`${item.type}-${item.id}`} item={item} type={item.type} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
