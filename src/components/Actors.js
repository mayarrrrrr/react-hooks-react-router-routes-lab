import React from "react";
import { actors } from "../data";

function Actors() {
  return <>

    <h1>Actors Page</h1>

    {

      actors.map((actor, name) => {
        return (
          <div key={name}>
            <h3>Actor's Name: {actor.name}</h3>

            <ul>
              {actor.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>
              })}
            </ul>


          </div>
        )
      })
    }


  </>;;
}

export default Actors;
