import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
import Header from './Header';

const Body = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className='flex flex-1'>
      <Sidebar/>
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  </div>
);

export default Body
