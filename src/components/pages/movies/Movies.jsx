//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core/';
import { Favorite, FavoriteBorder  } from '@material-ui/icons/';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { movieHeart, movieUnheart } from '../../../data/reducers/movieHeart';


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

     const hearted = useSelector( state => state.heart );

     const dispatch = useDispatch();

     const heartHandler = movie => e => {
          dispatch( movieHeart(movie) );
     };

     const unheartHandler = imdbID => e => {
          dispatch( movieUnheart(imdbID) );
     };


     console.log( hearted )
     return (
          <>
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
                                   { movie.Title }     ( { movie.Year } )  

                                   { hearted.filter( film => film.imdbID === movie.imdbID ).length === 0 ? (
                                        <IconButton
                                        color="primary"
                                        onClick={ heartHandler( movie ) }
                                        >
                                             <FavoriteBorder />
                                        </IconButton>
                                   ) : (
                                        <IconButton
                                        color="secondary"
                                        onClick={ unheartHandler( movie.imdbID ) }
                                        >
                                             <Favorite />
                                        </IconButton>
                                   ) }
                              </li>
                         ) ) }
                    </ul>
               ) }
          </>
     );   //   end of return
};   //   end of export movies
