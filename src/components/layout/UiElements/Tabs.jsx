import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



import MovieForm from '../../pages/movies/MovieForm';
import Movies from '../../pages/movies/Movies';
import MovieHeart from '../../pages/movies/MovieHeart';












function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               d={`full-width-tabpanel-${index}`}
               aria-labelledby={`full-width-tab-${index}`}
               {...other}
          >
          {value === index && (
          <Box p={3}>
               <Typography>{children}</Typography>
          </Box>
          )}
     </div>
     );
}

TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.any.isRequired,
     value: PropTypes.any.isRequired,
};

function a11yProps(index) {
     return {
     id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
     };
}

const useStyles = makeStyles((theme) => ({
     root: {
          backgroundColor: theme.palette.background.paper,
     },
}));

export default function FullWidthTabs() {
     const classes = useStyles();
     const theme = useTheme();
     const [value, setValue] = React.useState(0);

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     const handleChangeIndex = (index) => {
     setValue(index);
     };

     return (
          <div className={classes.root}>
               <AppBar position="sticky" color="default">
                    <Tabs
                         value={value}
                         onChange={handleChange}
                         indicatorColor="primary"
                         textColor="primary"
                         variant="fullWidth"
                         aria-label="full width tabs example"
                         centered
                    >

                         <Tab label="Searcher" {...a11yProps(0)} />
                         <Tab label="Likes" {...a11yProps(1)} />
                    </Tabs>
               </AppBar>
               <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
               >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid container >
                         {/* Gutter left */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>

                         <Grid item xs={ 12 } sm={ 10 } md={ 8 }>
                         <MovieForm />
                         <Movies />
                         </Grid>

                         {/* Gutter right */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>
                    </Grid>   
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container >
                         {/* Gutter left */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>

                         <Grid item xs={ 12 } sm={ 10 } md={ 8 }>
                         <MovieHeart />
                         </Grid>

                         {/* Gutter right */}
                         <Grid item xs={ 0 }   sm={ 1 }   md={ 2 }/>
                    </Grid>   

                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                         Item Three
                    </TabPanel>
               </SwipeableViews>
          </div>
     );
};