//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import undoable from 'redux-undo';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import moviesReducer from './reducers/movies';


//        -        -        -        S T O R E        -        -        -

export default createStore(
     combineReducers({
          movies: moviesReducer
     }),
     applyMiddleware( thunk, logger )
);   //   end of createStore