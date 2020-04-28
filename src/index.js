//        -        -        -        E X T E R N A L   I M P O R T S        -        -        -
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import './styles.css';
import store from './data';
import Layout from './components/layout/Layout';


//        -        -        -        V A R I A B L E S        -        -        -
const root = document.getElementById("app");


//        -        -        -        C O D E        -        -        -
const App = props => {
     return(
          <Provider store={ store }>
               <Layout />
          </Provider>
     );
};


//        -        -        -        R E N D E R        -        -        -
render( <App />, root );