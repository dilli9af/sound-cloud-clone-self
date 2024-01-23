import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div><NavBar /></div>
     
      <div className='homeDivs'>
        <div className='songsDiv'>content different music with filters</div>
         <hr />
        <div><Sidebar /></div>
      </div>

    </>
  )
}

export default Dashboard;