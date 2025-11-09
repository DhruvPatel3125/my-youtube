import React, { useEffect, useState, useRef } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.jsx";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [user, setUser] = useState(null);
  const searchRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        getSearchSuggestions();
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSuggestions = async (query) => {
    const response = await fetch(`http://localhost:5000/suggest?q=${query}`);
    const data = await response.json();
    return data;
  };

  const getSearchSuggestions = async () => {
    try {
      const data = await fetchSuggestions(searchQuery);
      setSuggestions(data[1] || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Failed to fetch suggestions:", error.message);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-between px-4 py-2 w-full">
      {/* Left Section */}
      <div className="flex items-center min-w-[200px]">
        <img
          onClick={toggleMenuHandler}
          className="h-7 mr-4 cursor-pointer hover:opacity-80 transition-opacity"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ReeS5Zn86e8s2K8UfnHkPRbTIdB0IYre6kDMlWDmQskvjQWI4OVmX3V5n5VFZZ98NaA&usqp=CAU"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-7 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnDBkNofkaZMvpZ42PyxDtYLNt3K4WCnkkkefrwLpRL0ILT21GUEK7U-_mYI1qZboGQ&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>

      {/* Center - Search Section */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-2xl relative" ref={searchRef}>
          <div className="flex relative">
            <input
              className="flex-1 border border-gray-300 px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500 text-sm"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button 
              className="border border-gray-300 border-l-0 px-6 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={handleSearch}
            >
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
          
          {/* Suggestions Dropdown - Fixed positioning */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="text-gray-400 mr-3 text-sm">🔍</span>
                  <span className="text-sm text-gray-800">{suggestion}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right - Auth Section */}
      <div className="flex items-center min-w-[200px] justify-end space-x-4">
        {user ? (
          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="user"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;