import React from 'react'


const Homepage = () => {
    return (
        <><div>
            <div className='homepage' style={{backgroundImage: `url("src/images/banner.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
    }}>
                <p>Now Available: First Fans. Subscribe to Next Pro to get your next upload heard by up to 100+ listeners. Start Today</p>
                <hr />
                <nav>
                    <ul>
                        <li><img className='logo' src="src/images/logo.png" alt="logo" /><h2>SOUNDCLOUD</h2></li>
                        <li><li><button>Sign in</button></li>
                        <li><button>Create Account</button></li>
                        <li><h3>For Artist</h3></li></li>
                        
                    </ul>
                </nav>
                <div>
                    <h1>Connect on SoundCloud</h1>
                    <p>
Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
                <button>Sign up for free</button></div>
            </div>
            <div>
                <input type="text" placeholder='Search for Music,Bands, Artists, Podcassts....'/> <span>or</span><button>Upload your own</button>
                <h3>Hear what’s trending for free in the SoundCloud community</h3>
            </div>
        </div>
            

        </>
    )
}

export default Homepage;