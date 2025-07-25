import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.jsx"; // Corrected path
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import auth state change and signOut

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null); // Add user state

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
    return () => unsubscribe(); // Cleanup subscription
  }, []);

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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-4 py-2 w-full">
      {/* Left */}
      <div className="flex items-center min-w-[200px]">
        <img
          onClick={toggleMenuHandler}
          className="h-7 mr-4 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ReeS5Zn86e8s2K8UfnHkPRbTIdB0IYre6kDMlWDmQskvjQWI4OVmX3V5n5VFZZ98NaA&usqp=CAU"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnDBkNofkaZMvpZ42PyxDtYLNt3K4WCnkkkefrwLpRL0ILT21GUEK7U-_mYI1qZboGQ&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center relative">
        <div className="flex w-full max-w-xl">
          <input
            className="w-full border border-gray-300 p-2 rounded-l-full focus:outline-none text-sm"
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
          <button className="border border-gray-300 border-l-0 px-4 rounded-r-full bg-gray-100 hover:bg-gray-200 transition" onClick={handleSearch}>
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 top-12 bg-white w-full max-w-xl border border-gray-200 rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((sug, index) => (
              <div
                key={index}
                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => setSearchQuery(sug)}
              >
                <span role="img" aria-label="search">🔍</span> {sug}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right - Auth Buttons/User Icon */}
      <div className="flex items-center min-w-[60px] justify-end space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8 rounded-full border border-gray-200 cursor-pointer"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="user"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
