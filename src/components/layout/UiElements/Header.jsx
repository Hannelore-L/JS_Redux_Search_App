//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
     },
}));


//        -        -        -        A P P B A R   E X P O R T        -        -        -

export default function ButtonAppBar() {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <AppBar position="static">
                    <Toolbar>
                         {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                              <MenuIcon />
                         </IconButton> */}
                         <Typography
                              component="h1"
                              variant="h3"
                              className={classes.title}>
                              Movie Searcher App
                         </Typography>
                    </Toolbar>
               </AppBar>
          </div>
     );
}
