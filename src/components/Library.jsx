import React from 'react'
import NavBar from './NavBar';
import SongFeed from './SongFeed';
import CarouselGlobalHits from './CarouselGlobalHits';

const Library = () => {
  return (
    <>
    <NavBar />
    <h2 style={{marginLeft:'5rem', color:'black'}}>Most Iconic Global Hits</h2>
    <CarouselGlobalHits />
    {/* <div>
        <ul>
            <li>Likes</li>
            <li>History</li>
        </ul>
    </div> */}
    </>
  )
}

export default Library;