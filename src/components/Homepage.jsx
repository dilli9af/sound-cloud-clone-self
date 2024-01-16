import React from 'react'


const Homepage = () => {
    return (
        <>
            <div>
                <div className='homepage' style={{
                    backgroundImage: `url("src/images/signup.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "25rem",
                    width: "100%"

                }}>

                    <nav>
                        <ul>
                            <li><img className='logoImg' src="src/images/signup_logo.png" alt="logo" /></li>
                            <li><li><button className='btn'>Sign in</button></li>
                                <li><button className='btn'>Create Account</button></li>
                                <li><h3>For Artist</h3></li></li>
                        </ul>
                    </nav>
                    <div className='midText'>
                        <div>
                            <h2>Connect on SoundCloud</h2>
                            <p>
                                Discover, stream, and share a constantly expanding mix of <br />music from emerging and major artists around the world.
                            </p>
                        </div>
                        <div>
                            <button className='btn'>Sign up for free</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                {/* <input type="text" placeholder='Search for Music,Bands, Artists, Podcassts....' /> <span>or</span><button>Upload your own</button> */}
                <h2 style={{ color: "black" }}>Hear what’s trending for free in the SoundCloud community</h2>
                <div className='gridAlbums'>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 1</p><br /><p>Temp Artist 1</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 2</p><br /><p>Temp Artist 2</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 3</p><br /><p>Temp Artist 3</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 4</p><br /><p>Temp Artist 4</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 5</p><br /><p>Temp Artist 5</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 6</p><br /><p>Temp Artist 6</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 7</p><br /><p>Temp Artist 7</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 8</p><br /><p>Temp Artist 8</p></div>
                    <div className="cellAlbum"><img src='src/images/working.png'></img><br /><p>Temp Song Name 9</p><br /><p>Temp Artist 9</p></div>
                </div>
            </div>

            <div className='annouce'><h2>Thanks for listening. Now join in.</h2>
                <h3>Save tracks, follow artists and build playlists. All for free.</h3></div>
            <div><button className='btn'>Create Account</button></div>
            <hr />
            <div >
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
        </>
    )
}

export default Homepage;