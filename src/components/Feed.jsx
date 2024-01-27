import React from 'react'
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import AlbumGrid from './AlbumGrid';

const Feed = () => {
  return (
    <>
      <NavBar />
      <div className='feedDivs'>
      
        {/* <div> <h3>Apeended songs list infinite scroll</h3></div> */}
        <div className='feedItem'><AlbumGrid /></div>
        <hr />
        <div className='feedItem'><Sidebar /></div>
        
        
        
      </div>

    </>
  )
}

export default Feed;