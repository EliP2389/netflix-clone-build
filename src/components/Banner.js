import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axios';
import requests from '../Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    // responsible for fetching the movie that shows on the banner
    useEffect(() => {
        async function fecthData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                // sets movie
                request.data.results[
                // generates a random number from 0 to the length of the results that come back
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fecthData();
    }, []);
    console.log(movie);

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
                // backdrop_path coming from api call
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{(`${movie?.name}`)}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>

                <h1 className='banner_description'>{truncate(`${movie?.overview}`, 150)}
                </h1>

            </div>

            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner