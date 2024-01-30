import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard';
import Feed from './components/Feed';
import Library from './components/Library';
import UserInfo from './components/UserInfo';
import SongFeed from './components/SongFeed';



const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<SongFeed />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/feed"  element={<Feed />} />
        <Route path="/library" element={<Library />} />
        <Route path="/userInfo" element={<UserInfo />} />
        {/* Add more Route elements for other pages if needed */}
        {/* <Route path="/" element={<NavBar />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
