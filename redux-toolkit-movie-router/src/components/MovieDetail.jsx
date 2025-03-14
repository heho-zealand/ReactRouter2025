import React from 'react';
import { useSelector } from 'react-redux';
import { clickedMovie } from '../store/MovieSlice';
import { Link } from 'react-router-dom';

export function MovieDetail(){
    const movie = useSelector(clickedMovie);
    const posterAssetsUrl = "/src/assets/Image/";
    if (movie){
        console.log(`${posterAssetsUrl}${movie.Poster}`);
        return (    
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-4">
                        <div><img className="poster" alt="Poster" src={`${posterAssetsUrl}${movie.Poster}`}></img> </div>
                        </div>
                        <div className="col-md-5">
                            <h1>Movie:</h1>
                            <b>Title:</b> {movie.Title}<b></b>
                            <b>Year:</b> {movie.Year}<br></br>
                            <b>Genre:</b> {movie.Genre}<br></br>
                            <b>Actors:</b> {movie.Actors}<br></br>
                            <br></br><br></br>
                            <h4>Plot:</h4> {movie.Plot}<br></br>
                            <br></br>
                            <p>
                                <button className = "badge badge-dark"> 
                                    <Link to="/">Back</Link>
                                </button>
                            </p>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
        }
        return null;
};


