import React from 'react'
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import AlbumGrid from './AlbumGrid';
import SongFeed from './SongFeed';

const Feed = () => {
  return (
    <>
      <NavBar />
      <div className='feedDivs'>
      
        {/* <div> <h3>Apeended songs list infinite scroll</h3></div> */}
        <div className='feedItem'><SongFeed /></div>
        {/* <hr /> */}
        <div className='feedItem'><Sidebar /></div>
        
        
        
      </div>

    </>
  )
}

export default Feed;