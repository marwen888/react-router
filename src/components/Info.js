import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
//import MovieCard from './MovieCard'
import '../info.css'



const Info = ({Movies}) => {
  
         const name = useParams();
          console.log(name)
             console.log(Movies.date)
          return (
   <div className="container" >
        <div>
          {
            Movies.filter((el) => el.name === name.name)
              .map((el) => (
               
                  
                      <div>
                       <h1>  {el.name}</h1>
                        <p>{el.description}</p>
                      <iframe src={el.trailer}
                           frameborder='0'
                           allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                               />

 
                   </div>
                    
            
              ))}
              <Link to ="/"> <button variant ="primary"onClick={onclick}> Go to main page</button></Link>
              
              </div>
      </div>
    )
}
export default Info

 