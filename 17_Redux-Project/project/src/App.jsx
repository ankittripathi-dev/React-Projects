import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SearchBar from "./components/Searchbar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import CollectionPage from "./pages/CollectionPage";
import { setResults, setLoading, setError } from "./redux/features/searchSlice";
import { fetchPhoto, fetchVideos, fetchGif } from "./api/mediaApi";

const HomePage = () => {
  const dispatch = useDispatch();
  const { query, active } = useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        dispatch(setLoading());
        try {
          let results;
          if (active === "photo") {
            results = await fetchPhoto(query);
          } else if (active === "videos") {
            results = await fetchVideos(query);
          } else if (active === "gif") {
            results = await fetchGif(query);
          }
          dispatch(setResults(results));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };
      fetchData();
    }
  }, [query, active, dispatch]);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-2xl font-bold">Media Search</h1>
        <Link to="/collection" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
          My Collection
        </Link>
      </nav>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
