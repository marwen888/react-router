import React, {useState} from 'react'
import MovieList from './components/MovieList'
import Navbarr from './components/Navbar/Navbarr'
import  {MoviesData} from './components/MoviesData' 
import AddMovie from './components/AddMovie/AddMovie'
import './App.css'
import Info from './components/Info'
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

const App = () => {
  const [Movies, setMovies] = useState(MoviesData)
  const [name, setName] = useState ("")
  const [ratingSearch, setRatingSearch] = useState(0)
  const Addfilm = (newmovie) => {
    return setMovies([...Movies, newmovie])
  }
  return (
     <div className="App" >
    <div>
     <Router>
         <Route exact path ='/' render ={()=> <Navbarr name={name} setName={setName}  ratingSearch={ratingSearch}  setRatingSearch={setRatingSearch}/>}/>
     
        
           <Route exact path ='/' render ={()=><MovieList Movies={Movies}  name={name}  ratingSearch={ratingSearch}/>}/>
        

         
             <Route exact path ='/' render ={()=> <AddMovie Addfilm={Addfilm}/>}/>
        <span style={{backgroundColor: "green"}}>
         <Route path ='/info/:name' render ={()=><Info Movies={Movies} />} />
        </span>
      </Router>
    </div>
    </div>
  );
}
export default App;
