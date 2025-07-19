import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        getSearchSuggestions();
      }
    }, 300); // Debounce API calls

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
// ✅ Inside your React component (not server.js)

const fetchSuggestions = async (query) => {
  const response = await fetch(`http://localhost:5000/suggest?q=${query}`);
  const data = await response.json();
  return data;
};

const getSearchSuggestions = async () => {
  try {
    const data = await fetchSuggestions(searchQuery);
    setSuggestions(data[1]);
    setShowSuggestions(true);
  } catch (error) {
    console.error("Failed to fetch suggestions:", error.message);
    setSuggestions([]);
    setShowSuggestions(false);
  }
};


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-white z-50 relative">
      {/* Left */}
      <div className="flex col-span-1 items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ReeS5Zn86e8s2K8UfnHkPRbTIdB0IYre6kDMlWDmQskvjQWI4OVmX3V5n5VFZZ98NaA&usqp=CAU"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnDBkNofkaZMvpZ42PyxDtYLNt3K4WCnkkkefrwLpRL0ILT21GUEK7U-_mYI1qZboGQ&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>

      {/* Center */}
      <div className="col-span-10 px-10 relative">
        <input
          className="w-1/2 border border-gray-300 p-2 rounded-l-full focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
        🔍
        </button>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white w-[50%] border border-gray-200 rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((sug, index) => (
              <div
                key={index}
                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => setSearchQuery(sug)}
              >
                🔍 {sug}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right */}
      <div className="col-span-1 flex items-center justify-end">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
