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
        <div className='nav nav_black'>
            <div className='nav_content'>
                <img className='nav_logo'
                    src='https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5'
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