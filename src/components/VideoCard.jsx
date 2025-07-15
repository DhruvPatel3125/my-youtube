import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    if (!info || !info.snippet || !info.statistics) return null;
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div>
        <img alt='video' src={thumbnails.high.url} />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard