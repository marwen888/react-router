import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
const MovieList = ({Movies , name, ratingSearch}) => {
    return (
         <div style={{display: "flex", alignContent: "center", justifyContent: "space-around",  }}>
        
           {Movies.filter(el=>el.name.toUpperCase().includes(name.toUpperCase().trim())&& el.rate>= ratingSearch).map(el=><MovieCard el={el}/>)}
        </div>
    )
}
export default MovieList

