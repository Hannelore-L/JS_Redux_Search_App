//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


//        -        -        -        U S E S T Y L E S        -        -        -

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
     menuButton: {
          marginRight: theme.spacing(2),
     },
     title: {
          flexGrow: 1,
          // padding: 0
     },
     noGutter: {
          padding: 0
     },
}));


//        -        -        -        A P P B A R   E X P O R T        -        -        -

export default function ButtonAppBar() {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <AppBar position="static">
                    <Grid container>
                         {/* Gutter left */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>

                         <Grid item xs={ 12 } sm={ 10 } md={ 8 }>
                         <Toolbar className={classes.noGutter}>
                              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                   <MenuIcon />
                              </IconButton> */}

                              <Typography
                                   component="h1"
                                   variant="h4"
                                   className={classes.title}
                              >
                                   Movie Searcher App
                              </Typography>
                         </Toolbar>
                         </Grid>

                         {/* Gutter right */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>
                    </Grid>
               </AppBar>
          </div>
     );
}
