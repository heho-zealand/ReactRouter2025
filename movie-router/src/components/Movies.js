import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const Movies = () => (
    <Switch>
        <Route exact path='/' component={MovieList}/>
        <Route path='/MovieDetails/:Title' component={MovieDetail}/>
    </Switch>
)

export default Movies;