import React from 'react'
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <>
    <NavBar />
    <div>
        <h3>Apeended songs list infinite scroll</h3>
    </div>
    <Sidebar />
    </>
  )
}

export default Feed;