//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import moviesReducer from './reducers/movies';
import movieHeartReducer from './reducers/movieHeart';


//        -        -        -        S T O R E        -        -        -

export default createStore(
     combineReducers({
          movies: moviesReducer,
          heart: movieHeartReducer
     }),
     applyMiddleware( thunk, logger )
);   //   end of createStore