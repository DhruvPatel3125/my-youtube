import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      console.log("Fetching from:", YOUTUBE_VIDEO_API);
      const res = await fetch(YOUTUBE_VIDEO_API);
      const json = await res.json();
      console.log("Fetched JSON:", json.items);
      setVideos(json.items);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
