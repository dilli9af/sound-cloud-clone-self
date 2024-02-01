import React from 'react'

const Sidebar = () => {
    return (
        <> <div className='sideFooter'>
            
            <h2>Listening History</h2>
            <p>Songs plyed to be added below as history</p>
            <hr />
            <div>
                <ul className='footerLinks'>
                    <li>Legal</li>
                    <li>Privacy</li>
                    <li>Cookie Policy</li>
                    <li>Consent Manager</li>
                    <li>Imprint</li>
                    <li>Artist</li>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Charts</li>
                </ul>
                <h5 style={{display:'flex',flexDirection:'flex-start'}}>Language: English (US)</h5>
            </div></div>

        </>
    )
}

export default Sidebar;