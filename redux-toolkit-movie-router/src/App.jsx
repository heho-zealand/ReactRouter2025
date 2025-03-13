import {Header} from './components/Header';
import {MovieList} from './components/MovieList';
import {About} from './components/About'; 
import {UnderConstruction} from './components/UnderConstruction';
import {MovieDetail} from './components/MovieDetail';
import {Routes, Route} from 'react-router-dom';




function App() {

  return (
    <div className="App">
     <Header />
     <Routes>
      <Route exact path='/' element={<MovieList/>}/>
      <Route path='/MovieDetails/:Title' element={<MovieDetail/>}/>
     
       <Route path='/About' element={<About/>}/>
       <Route path='/Login' element={<UnderConstruction/>} />
       <Route path='/Admin' element={<UnderConstruction/>} />
      
       <Route path='*' element={<MovieList/>} />
    </Routes>
    </div>
  );
}

export default App

//<Route path='/MovieDetails' element={<MovieDetails/>} />