import React, { useState } from "react";
import '.././index.css';

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btnBlack">
                Sign In
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">

                        <div className="modalForm">
                            <h1>Sign In</h1>
                            <input type="text" placeholder="Your Eamil address" />
                            <input type="password" placeholder="Your Passwors" />
                            <button  className="btn">Sign In</button></div>
                        <h4>Don't have an account? <a href="#">Sign Up</a></h4>
                        <p>
                            When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our Privacy Policy.</p>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}