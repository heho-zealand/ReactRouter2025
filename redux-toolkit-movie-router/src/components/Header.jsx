import MovieImg from '../assets/Image/movie_img.png';
import { Link } from 'react-router-dom';

export function Header() {

  return (
    <div className="App">
     
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Movies</Link><br></br>
            <Link to='/About' className="nav-item nav-link">About</Link><br></br>
            <Link to='/Admin'className="nav-item nav-link">Admin</Link><br></br>
            <Link to='/Login' className="nav-item nav-link">Login</Link><br></br>
          </nav>
        </div> 
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75" alt='movie'/></span>
      <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
        </div>
     
    </div>
  );
}


