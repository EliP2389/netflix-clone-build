import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
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