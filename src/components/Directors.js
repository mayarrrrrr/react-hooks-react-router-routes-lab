import React from "react";
import { directors } from "../data";

function Directors() {
  return <>

    <h1>Directors Page</h1>

    {

      directors.map((director, name) => {
        return (
          <div key={name}>
            <h3>Director's Name: {director.name}</h3>
            
            <ul>
              {director.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>
              })}
            </ul>


          </div>
        )
      })
    }
   

  </>;
}

export default Directors;
