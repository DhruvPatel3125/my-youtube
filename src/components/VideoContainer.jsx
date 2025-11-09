import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer"; // Optional: Add a loading shimmer component

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching from:", YOUTUBE_VIDEO_API);
      
      const res = await fetch(YOUTUBE_VIDEO_API);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const json = await res.json();
      
      if (!json.items || !Array.isArray(json.items)) {
        throw new Error("Invalid API response format");
      }
      
      setVideos(json.items);
    } catch (err) {
      console.error("Fetch failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-6">
        {/* You can replace this with a proper Shimmer component */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-300 rounded-xl w-full h-40 mb-3"></div>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 px-4">
        <div className="text-red-500 text-lg mb-4">Error loading videos</div>
        <button 
          onClick={getVideos}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Show empty state
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 px-4">
        <div className="text-gray-500 text-lg">No videos found</div>
        <button 
          onClick={getVideos}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-6">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId || video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;