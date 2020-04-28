//        -        -        -        I N I T I A L   S T A T E        -        -        -

const initialState = [];


//        -        -        -        -         T Y P E S        -        -        -        -

const MOVIE_HEART = "MOVIE_HEART";
const MOVIE_UNHEART = "MOVIE_UNHEART";


//        -        -            A C T I O N   C R E A T O R S           -        -

//    -    movieHeart    -
export const movieHeart = payload => ({
     type: MOVIE_HEART,
     payload
});  //   end of movieHeart


//    -    movieUnheart    -
export const movieUnheart = imdbID => ({
     type: MOVIE_UNHEART,
     payload: imdbID
});  //   end of movieUnheart


//        -        -        -              R E D U C E R              -        -        -
export default ( state = initialState, { type, payload } ) => {
     switch ( type ) {
          case MOVIE_HEART:
               return [
                    ...state,
                    payload
               ];  //   end case MOVIE_HEART

          case MOVIE_UNHEART:
               return (
                    state.filter( data => data.imdbID !== payload )
               );  //   end case MOVIE_UNHEART

          default:
               return state;
     };   //   end of switch
};   //   end of reducer export