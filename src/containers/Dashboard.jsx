import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import AlbumGrid from '../components/AlbumGrid'

const Dashboard = () => {
  return (
    <>
      <div><NavBar /></div>

      <div className='homeDivs'>
        <div className='songsDiv'>
          <AlbumGrid />
          content different music with filters</div>
        <hr />
        <div><Sidebar /></div>
      </div>

    </>
  )
}

export default Dashboard;