//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
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


//        -        -        -        E X P O R T   F O O T E R        -        -        -

export default function ButtonAppBar() {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <AppBar 
                    position="fixed"
                    bottom={0}
                    className="main-footer"
               >
                    <Toolbar>
                         <Typography variant="h6">
                              News
                         </Typography>
                    </Toolbar>
               </AppBar>
          </div>
     );
}
