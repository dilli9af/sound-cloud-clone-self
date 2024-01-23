import React from 'react'
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <>
      <NavBar />
      <div className='feedDivs'>
        <div> <h3>Apeended songs list infinite scroll</h3></div>
        <hr />
        <div><Sidebar /></div>
      </div>

    </>
  )
}

export default Feed;