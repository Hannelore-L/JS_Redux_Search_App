//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Header from './UiElements/Header';
// import Footer from './UiElements/Footer';
import Tabs from './UiElements/Tabs';


//        -        -        -        L A Y O U T   E X P O R T        -        -        -

export default props => {
     return (
          <>
               <Header />
               <Tabs/>
              {/* <Footer /> */}
          </>
     );
}; // end of layout export
