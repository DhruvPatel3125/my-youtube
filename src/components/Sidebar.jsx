import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
//early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Musics</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Musics</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar
