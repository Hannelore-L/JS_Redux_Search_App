//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import { useState } from 'react';


//        -        -        -        E X P O R T S        -        -        -

export const useField = ( str= "", errorSupport = false ) => {
     const [ value, setValue ] = useState( str );
     const [ error, setError ] = useState( false );

     const onChange = e => {
          setError( false );
          setValue( e.target.value );
     };

     if ( errorSupport ) {
          return { value, onChange, error, setError, setValue };
     } else {
          return { value, onChange };
     };
};   //   end export useField