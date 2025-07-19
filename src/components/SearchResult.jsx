import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            query
          )}&type=video&maxResults=12&key=${API_KEY}`
        );
        const data = await res.json();
        if (data.error) {
          setError(data.error.message);
          setVideos([]);
        } else {
          setVideos(data.items || []);
        }
      } catch (err) {
        setError("Failed to fetch videos.");
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [query]);

  if (!query) return <div className="p-4">Type something to search!</div>;
  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Results for "{query}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.length > 0 ? (
          videos
            .filter((video) => video && video.snippet)
            .map((video) => (
              <VideoCard key={video.id.videoId || video.id} video={video} />
            ))
        ) : (
          <div>No results found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;