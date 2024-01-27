import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='parentNavBar'>
            <ul className='navBar'>
                <li className='navBarItem'><Link to="/dashboard"><img src="/src/images/logo.png" alt="" /></Link></li>
                <li className='navBarItem'><Link to="/dashboard">Home</Link></li>
                <li className='navBarItem'><Link to="/feed">Feed</Link></li>
                <li className='navBarItem'><Link to="/library">Library</Link></li>
                <li className='navBarItem'><input className='searchBar' type="search" placeholder='Search' /></li>
                <li className='navBarItem'><Link to="/userInfo"><h3>Anoop</h3> </Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

