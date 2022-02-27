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
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PjRijJmpbMo1hzrKIyZ5VV_KINQSqQ7wvDMK4gyaNl1t8pP1DNQHFAQJwKGdezy20II&usqp=CAU'
                    alt=''
                />

                <img className='nav_avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
                    alt=''
                />
            </div>
        </div>
    )
}

export default Nav