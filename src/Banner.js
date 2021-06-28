import React,{ useState,useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {

    const[movie, setMovie]=useState([]);
    useEffect(()=>
    {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            )
        }
        fetchData();
    },[]);
    console.log(movie);
    return (
        <header className="banner" 
        style={{
                    backgroundSize:"cover",
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                    backgroundPositions:"center center"
        }}>
            <div className="banner__contents">
                <h1>
                    {movie.title || movie?.name || movie?.orginal_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            title
        </header>
    );}
export default Banner