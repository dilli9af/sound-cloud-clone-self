import React from 'react'

const Sidebar = () => {
    return (
        <> <div className='sideFooter'>
            
            <h2>Listening History</h2>
            <p>Songs plyed to be added below as history</p>
            <hr />
            <div>
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
                </ul>
                <h5 style={{display:'flex',flexDirection:'flex-start'}}>Language: English (US)</h5>
            </div></div>

        </>
    )
}

export default Sidebar;