//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IconButton } from '@material-ui/core/';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { movieUnheart } from '../../../data/reducers/movieHeart';

//        -        -        -        E X P O R T   H E A R T        -        -        -

export default () => {
     const hearted = useSelector( state => state.heart );
     const dispatch = useDispatch();

     const unheartHandler = imdbID => e => {
          dispatch( movieUnheart( imdbID ) );
     };

     return (
          <>
               { hearted.length === 0 && <p>No movies or series liked, yet.</p> }
               { hearted.length !== 0 && (
                    <ul>
                         { hearted.map( movie => (
                              <li key={ movie.imdbID }>
                                   <strong>{ movie.Title }</strong> from { movie.Year }

                                   <IconButton
                                        color="secondary"
                                        onClick={ unheartHandler( movie.imdbID ) }
                                   >
                                        <Favorite />
                                   </IconButton>
                              </li>
                         ) ) }
                    </ul>
               ) }
          </>
     );
};