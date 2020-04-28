//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import Grid from '@material-ui/core/Grid';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Header from './UiElements/Header';
import Footer from './UiElements/Footer';
import MovieForm from '../pages/movies/MovieForm';
import Movies from '../pages/movies/Movies';
import MovieHeart from '../pages/movies/MovieHeart';


//        -        -        -        L A Y O U T   E X P O R T        -        -        -

export default props => {
     return (
          <>
               <Header />

               <Grid container >
                    {/* Gutter left */}
                    <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>

                    <Grid item xs={ 12 } sm={ 10 } md={ 8 }>
                         <MovieForm />
                         <Movies />
                         <hr />
                         <MovieHeart />
                    </Grid>

                    {/* Gutter right */}
                    <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>

               </Grid>   
              {/* <Footer /> */}

          </>
     );
}; // end of layout export
