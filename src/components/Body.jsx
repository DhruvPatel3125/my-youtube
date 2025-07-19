import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
import Header from './Header';

const Body = () => (
  <>
    <Header />
    <div className='grid grid-flow-col'>
      <Sidebar/>
      <Outlet/>
    </div>
  </>
);

export default Body
