import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  if (!video || !video.snippet) return null;
  
  const { snippet } = video;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = video.statistics ? video.statistics.viewCount : null;
  const videoId = video.id.videoId || video.id;

  // Color palette for avatars
  const avatarColors = [
    'bg-red-100 text-red-600',
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-yellow-100 text-yellow-600',
    'bg-purple-100 text-purple-600',
    'bg-pink-100 text-pink-600',
    'bg-indigo-100 text-indigo-600',
    'bg-orange-100 text-orange-600'
  ];

  // Generate consistent color and initial based on channel title
  const getChannelAvatar = () => {
    if (!channelTitle) return { color: avatarColors[0], initial: 'Y' };
    
    let hash = 0;
    for (let i = 0; i < channelTitle.length; i++) {
      hash = channelTitle.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    
    const color = avatarColors[hash % avatarColors.length];
    const initial = channelTitle.charAt(0).toUpperCase();
    
    return { color, initial };
  };

  const { color, initial } = getChannelAvatar();

  // Format view count to be more readable
  const formatViewCount = (count) => {
    if (!count) return '';
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M views';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K views';
    }
    return count + ' views';
  };

  return (
    <Link to={`/watch?v=${videoId}`} className="block">
      <div className='w-full max-w-[360px] mx-auto hover:bg-gray-50 rounded-xl transition-all duration-200'>
        {/* Thumbnail Container */}
        <div className='relative w-full pb-[56.25%] mb-3 overflow-hidden rounded-xl'>
          <img 
            className='absolute top-0 left-0 w-full h-full object-cover'
            alt={title}
            src={thumbnails.medium?.url || thumbnails.default?.url} 
          />
        </div>
        
        {/* Video Info */}
        <div className='flex gap-3 px-2 pb-3'>
          {/* Channel Avatar */}
          <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-medium ${color}`}>
            {initial}
          </div>
          
          <div className='flex-1 min-w-0'>
            <h3 className='font-medium text-sm line-clamp-2 mb-1 leading-tight'>
              {title}
            </h3>
            <p className='text-gray-600 text-sm truncate'>
              {channelTitle}
            </p>
            {viewCount && (
              <p className='text-gray-600 text-sm'>
                {formatViewCount(viewCount)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;