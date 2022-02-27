import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axios';
import requests from '../Requests';

function Banner() {

const [movie, setMovie] = useState([]);

// responsible for fetching the movies
useEffect(() => {
    async function fecthData() {

    }
})

    // n represents number of characters
    function truncate(string, n) {
        // if string not present we use the '?' to protect incase string is undefined
        // is string.length is greater than 'n' then string.substr(0, n - 1) which will then cut the string at the character count and leave '...'
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png)`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                
                <h1 className='banner_description'>{truncate(`This is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description`, 150)}
                    </h1>

            </div>

            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner