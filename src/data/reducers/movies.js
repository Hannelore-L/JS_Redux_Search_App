//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import axios from 'axios';


//        -        -        -        L O C A L   I M P O R T S        -        -        -


//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = {
     loading: false,
     error: "",
     data: [],
     progress: {
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

//    -    getNextMovies    -
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


//    -    getMovies    -
export const getMovies = str => dispatch => {
     dispatch( loadMovies() );

     axios
     .get( `${process.env.REACT_APP_ENDPOINTMOVIES}&s=${ str }` )
     .then( response => {
          if ( response.data.Response === "False" ) {
               dispatch( setError( "No movies found" ) );
          } else {
               dispatch(
                    setMovies(
                         response.data.Search,
                         parseInt( response.data.totalResults, 10 )
                    )
               );
               if (parseInt( response.data.totalResults, 10 ) > response.data.Search.length ) {
                    dispatch( getNextMovies( str ) );
               };
          };
     } )
     .catch( error => dispatch(
          setError( "Api endpoint could not be reached" )
     ) );
};   //   end of getMovies


//    -    loadMovies    -
export const loadMovies = () => ({
     type: FETCH_MOVIES_SUCCESS
});   //   end of loadMovies


//    -    setMovies    -
export const setMovies = ( movies, total ) => ({
     type: FETCH_MOVIES_SUCCESS,
     payload: {
          movies,
          total
     }
});   //   end of setMovies


//    -    loadNextMovies    -
export const loadNextMovies = page => ({
     type: FETCH_NEXT_MOVIES_START,
     payload: page
});  //   end of loadNextMovies


//    -    setNextMovies    -
export const setNextMovies = movies => ({
     type: FETCH_NEXT_MOVIES_SUCCESS,
     payload: movies
});  //   end of setNextMovies


//    -    setError    -
export const setError = msg => ({
     type:FETCH_MOVIES_ERROR,
     payload: msg
});  //   end of setError


//        -        -        -              R E D U C E R              -        -        -

export default ( state = initialState, { type, payload } ) => {
     switch ( type ) {
          case FETCH_MOVIES_START:
               return {
                    ...state,
                    loading: true,
                    error: "",
                    progress: {
                         page: 1,
                         pages: 0,
                         loaded: 0,
                         total: 0
                    }
               };   //   end case FETCH_MOVIES_START

          case FETCH_MOVIES_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    data: payload.movies,
                    progress: {
                         ...state.progress,
                         loaded: payload.movies.length,
                         pages: Math.ceil( payload.total / payload.movies.length ),
                         total: payload.total
                    }
               };   //   end case FETCH_MOVIES_SUCCESS

          case FETCH_NEXT_MOVIES_START:
               return {
                    ...state,
                    error: "",
                    progress: {
                         ...state.progress,
                         page: payload
                    }
               };   // end case FETCH_NEXT_MOVIES_START

          case FETCH_NEXT_MOVIES_SUCCESS:
               return {
                    ...state,
                    loading: false,
                    data: [ ...state.data, ...payload ],
                    progress: {
                         ...state.progress,
                         loaded: state.progress.loaded + payload.length
                    }
               };   //   end case FETCH_NEXT_MOVIES_SUCCESS

          case FETCH_MOVIES_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: payload
               };   //   end case FETCH_MOVIES_ERROR

          default:
               return state;
     };   //   end of switch
};   //   end of reducer export