import React from 'react';
import MovieImg from '../assets/Image/underconstruction.gif';

export function UnderConstruction(){
  return (
    <>
      <h1>Under Construction</h1>
      <p>This page is under cunstruction.</p>
       <img className="rounded movie_img m-3" src={MovieImg}  alt='movie'/>
    </>
  );
}

