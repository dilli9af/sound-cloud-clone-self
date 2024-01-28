import React from 'react'
import NavBar from './NavBar';
import SongFeed from './SongFeed';

const Library = () => {
  return (
    <>
    <NavBar />
    <SongFeed />
    <div>
        <ul>
            <li>Likes</li>
            <li>History</li>
        </ul>
    </div>
    </>
  )
}

export default Library;