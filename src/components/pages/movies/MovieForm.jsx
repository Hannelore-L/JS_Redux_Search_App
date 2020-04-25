//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useDispatch } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { useField } from '../../../hooks';
import { getMovies } from '../../../data/reducers/movies';


//        -        -        -        E X P O R T   F O R M        -        -        -

export default () => {
     const {
          error,
          setError,
          setValue,
          ...field
     } = useField( "", true );
     const dispatch = useDispatch();

     const submitHandler = e => {
          e.preventDefault();
          if ( field.value === "" ) {
               setError( true );
          } else {
               setValue("");
               dispatch( getMovies( field.value ) );
          };
     };   // end of submitHandler

     return (
          <form
               onSubmit={ submitHandler }>
                    <label for="movieFormInput">Search term:</label>
                    <input 
                         type="text" 
                         name="movieFormInput"
                         placeholder="Example: Saw"
                         className={ error ? "error" : "" }
                    />

                    <input
                         type="submit"
                         value="Search!"
                    />
               </form>
     );   //end of return
};   //   end of export form