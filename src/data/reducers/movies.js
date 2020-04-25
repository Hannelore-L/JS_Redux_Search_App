//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import axios from 'axios';


//        -        -        -        L O C A L   I M P O R T S        -        -        -


//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = {
     loading: false,
     error: "",
     data: [],
     progress {
          page: 0,
          pages: 0,
          total: 0,
          loaded: 0
     }
};


//        -        -        -        -         T Y P E S        -        -        -        -

const FETCH_MOVIES_START = "FETCH_MOVIES_START";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
const FETCH_NEXT_MOVIES_START = "FETCH_NEXT_MOVIES_START";
const FETCH_NEXT_MOVIES_SUCCESS = "FETCH_NEXT_MOVIES_SUCCESS";


//        -        -            A C T I O N   C R E A T O R S           -        -

export const getNextMovies = str => ( dispatch, getState ) => {
     const {
          movies:{
               progress: {
                    page,
                    pages
               }
          }
     } = getState();

     const pageToLoad = page + 1;
     dispatch( loadNextMovies( pageToLoad ) );

     axios
          .get( `${process.env.REACT_APP_ENDPOINTMOVIES}&s=${ str }` )
          .then( response => {
               dispatch( setNextMovies( response.data.Search ) );
               if ( pageToLoad !== pages ) {
                    dispatch( getNextMovies( str ) );
               };
          } )
          .catch( error => dispatch( setError( "Api endpoint could not be reached" ) ) );
};   //   end of getNextMovies




//        -        -        -              R E D U C E R              -        -        -
