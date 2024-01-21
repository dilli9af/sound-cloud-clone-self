import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='parentNavBar'>
            <ul className='navBar'>
                <li><Link to="/dashboard"><img src="/src/images/logo.png" alt="" /></Link></li>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><input type="search" placeholder='Search' /></li>
                <li><Link to="/userInfo"><h3>Anoop</h3> </Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

