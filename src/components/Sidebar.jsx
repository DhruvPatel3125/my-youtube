import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
//early return pattern
  if(!isMenuOpen) return null;

  return (
    <aside className='bg-white border-r border-gray-200 h-[calc(100vh-56px)] w-56 pt-4 px-2 flex flex-col sticky top-14'>
      <ul>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span><Link to="/">Home</Link></li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Shorts</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Video</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Live</li>
      </ul>
      <h1 className='font-bold pt-5 px-3 text-xs text-gray-500 uppercase tracking-wider'>Subscriptions</h1>
      <ul>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Musics</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Sports</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Gaming</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Movie</li>
      </ul>
      <h1 className='font-bold pt-5 px-3 text-xs text-gray-500 uppercase tracking-wider'>Watch Later</h1>
      <ul>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Musics</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Sports</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Gaming</li>
        <li className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"><span></span>Movie</li>
      </ul>
    </aside>
  )
}

export default Sidebar
