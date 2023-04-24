import React from "react";
import { actors } from "../data";

function Actors() {
   return (
      <div>
         <h1>Actors Page</h1>
         {actors.map((actor, i) => (
            <div key={i}>
               <h2>{actor.name}</h2>

               <ul>
                  {actor.movies.map((movie, i) => (
                     <li key={i}>{movie}</li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   );
}

export default Actors;
