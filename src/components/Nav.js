import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect (() => {
    window.addEventListener('scroll', transitionNavBar);
    // clean up function
    return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

    return (
        // show (only show if nav_black is true)
        <div className={`nav  ${show && 'nav_black'}`}>
            <div className='nav_content'>
                <img className='nav_logo'
                    src="https://thereelbits.com/wp-content/uploads/2017/05/Netflix-Logo.jpg"
                    alt='netflix logo'
                />

                <img className='nav_avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
                    alt='netflix avatar'
                />
            </div>
        </div>
    )
}

export default Nav