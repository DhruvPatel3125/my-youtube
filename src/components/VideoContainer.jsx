import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/contants'

const VideoContainer = () => {
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async () => {
    try {
      console.log("Fetching from:", YOUTUBE_VIDEO_API);
      const res = await fetch(YOUTUBE_VIDEO_API);
      const json = await res.json();
      console.log("Fetched JSON:", json);
      if (json.error) {
        console.error("YouTube API Error:", json.error);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };
  return (
    <>
    </>
  )
}

export default VideoContainer