import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";

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
      setVideos(json.items);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId || video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
