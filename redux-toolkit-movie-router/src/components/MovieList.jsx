import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovie, listOfMovies } from './MovieSlice';
import { Link } from 'react-router-dom';
import './MovieList.css';


export function MovieList() { 
  const dispatch = useDispatch();
  const movielist = useSelector(listOfMovies);
    
    return (    
      <div className="MovieList">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies">
              { movielist.map(movie => { 
                  return <Link to={`/MovieDetails/${movie.Title}`}>
                              <li key={movie.Title} onClick={() => dispatch(selectMovie(movie))}>
                                <span className="alignleft">{movie.Title}</span>
                                <span className="alignright">{movie.Year}</span>
                              </li>           
                          </Link>     
                
                }) 
            }         
        </ul>
      </div>
      </div>
    );
  
}


