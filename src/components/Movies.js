import React from "react";
import { movies } from "../data";


function Movies() {

  
   
 
  return <>
     
    <h1>Movies Page</h1>
      
      {
       
        movies.map((movie,title)=>{
          return(
            <div key={title}>
              <h3>Movie's Title: {movie.title}</h3>
              <p>Movie's Time: {movie.time}</p>
              <p>Genres</p>
              <ul>
                {movie.genres.map((genre, index) => {
                  return <li key={index}>{genre}</li>
                })}
              </ul>


            </div>
          )
        })
      }
  
  
  
  
  </>;
}

export default Movies;
