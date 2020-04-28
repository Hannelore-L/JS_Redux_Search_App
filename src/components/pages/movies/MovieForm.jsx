//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';



//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { useField } from '../../../hooks';
import { getMovies } from '../../../data/reducers/movies';



//        -        -        -        U S E S T Y L E S        -        -        -

const useStyles = makeStyles((theme) => ({
     root: {
          '& .MuiTextField-root': {
               margin: theme.spacing(1),
               width: '25ch',
          },
     },
     error: {
          backgroundColor: "red"
     },
     button: {
          margin: theme.spacing(1),
     },
}));

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

     const classes = useStyles();

     return (
          <form
               onSubmit={ submitHandler }
          >
                    <TextField
                         className={ error ? "error classes.error" : "" }
                         { ...field }
                         id={ error ? "outlined-error" : "movieFormInput" }
                         label="Search term:"
                         variant="outlined"
                    />

                    <Button
                         type="submit"
                         variant="contained"
                         color="default"
                         className={classes.button}
                         startIcon={<MovieCreationIcon />}
                    >
                         Search!
                    </Button>
               </form>
     );   //end of return
};   //   end of export form