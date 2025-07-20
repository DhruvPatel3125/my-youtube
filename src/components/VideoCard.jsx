import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  if (!video || !video.snippet) return null;
  const { snippet } = video;
  const { channelTitle, title, thumbnails } = snippet;
  // statistics may not be present in search results
  const viewCount = video.statistics ? video.statistics.viewCount : null;
  const videoId = video.id.videoId || video.id;

  return (
    <Link to={`/watch?v=${videoId}`} className="block">
      <div className='p-2 m-2 w-72 shadow-lg h-auto'>
        <img className='rounded-lg' alt='video' src={thumbnails.medium.url} />
        <ul>
          <li className='font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          {viewCount && <li>{viewCount} views</li>}
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;