//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useSelector } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import MovieForm from './MovieForm';
import Heart from './Heart';


//        -        -        -        E X P O R T   M O V I E S        -        -        -

export default () => {
     const {
          loading,
          error,
          data,
          progress: {
               loaded,
               total
          }
     } = useSelector( state => state.movies );

     return (
          <>
               <MovieForm />
               { loading && <p>Loading...</p> }
               { loaded !== 0 && (
                    <p>
                         Loading { loaded }/{ total } movies/series/games ...
                    </p>
               ) }
               { error !== "" && <p>{ error }</p> }
               { data.length !== 0 && (
                    <ul>
                         { data.map( movie => (
                              <li key={ movie.imdbID }>
                                   { movie.Title }     ( { movie.Year } ) <Heart />
                              </li>
                         ) ) }
                    </ul>
               ) }
          </>
     );   //   end of return
};   //   end of export movies
