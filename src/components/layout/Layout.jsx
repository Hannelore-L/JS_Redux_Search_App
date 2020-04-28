//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';



//        -        -        -        L O C A L   I M P O R T S        -        -        -
// import AppBar from './UiElements/AppBar';
import MovieForm from '../pages/movies/MovieForm';
import Movies from '../pages/movies/Movies';
import MovieHeart from '../pages/movies/MovieHeart';


export default props => {
     return (
          <>
               <MovieForm />
               <Movies />
               <hr />
               <MovieHeart />
          </>
     );
}; // end of layout export
