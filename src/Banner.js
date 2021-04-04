import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios';
import requests from './Requests';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        return request
        }
        
        fetchData();
    }, []);


    function truncate(string,n){
        return string?.length > n ? string.substr(0,n) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <div className="banner_title">
                    {movie?.name || movie?.title || movie?.original_name}
                </div>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(`${movie?.overview}`,150)}</h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
