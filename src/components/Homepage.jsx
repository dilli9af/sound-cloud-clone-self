import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumGrid from './AlbumGrid';

const Homepage = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div className='homepageDiv'>

            <div
                className='homepage'
                style={{
                    backgroundImage: `url("src/images/signup.jpg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '25rem',
                    width: '100%',
                }}
            >
                <nav>
                    <ul className='homepageNavbar'>
                        <li>
                            <img className='logoImg' src="src/images/signup_logo.png" alt="logo" />
                        </li>
                        <li> <li>
                            <button onClick={toggleModal} className="btnBlack">
                                Sign In
                            </button>
                            {modal && (
                                <div className="modal">
                                    <div onClick={toggleModal} className="overlay"></div>
                                    <div className="modal-content">
                                        <div className="modalForm">
                                            <h2>Sign In</h2>
                                            <input type="text" placeholder="Your Email address" />
                                            <input type="password" placeholder="Your Password" />
                                            <Link to="/dashboard"><button className="btn">Sign In</button></Link>
                                        </div>
                                        <h4>Don't have an account? <a href="#">Sign Up</a></h4>
                                        <p>
                                            When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our Privacy Policy.
                                        </p>
                                        <button className="close-modal" onClick={toggleModal}>
                                            X
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li><button onClick={toggleModal} className='btn'>Create Account</button></li>
                        <li><button onClick={toggleModal} className='btnBlack'>For Artist</button></li></li>
                       
                    </ul>
                </nav>
                <div className='midText'>
                    <div>
                        <h1>Connect on SoundCloud</h1>
                        <h2>
                            Discover, stream, and share a constantly expanding mix of <br />music from emerging and major artists around the world.
                        </h2>
                    </div>
                    <div>
                        <button onClick={toggleModal} className='btnbig'>Sign up for free</button>
                    </div>
                </div>
            </div>


            <div className='homepageSubDiv'>
                <h2 style={{ color: 'black' }}>Hear what’s trending for free in the SoundCloud community</h2>
                <AlbumGrid />
            </div>

            <div  className='homepageSubDiv'>
                {/* className='annouce' */}
                <h2>Thanks for listening. Now join in.</h2>
                <h3>Save tracks, follow artists and build playlists. All for free.</h3>
            </div>
            <div className='homepageSubDiv'>
                <button onClick={toggleModal} className='btnbig'>Create Account</button>
            </div>
            <hr />
            <div className='homepageSubDiv'>
                <ul className='footerLinks'>
                    <li>About us</li>
                    <li>Artist</li>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Developers</li>
                    <li>Help</li>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Cookie</li>
                    <li>Policy</li>
                    <li>Consent</li>
                    <li>Manager</li>
                    <li>Imprint</li>
                    <li>Charts</li>
                    <li><h3>Language: English (US)</h3></li>
                </ul>
            </div>
        </div>
    );
}

export default Homepage;
