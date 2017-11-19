//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import BoatsList from './components/BoatsList';


ReactDOM.render((
  <BrowserRouter basename="/">
    <Routes />
  </BrowserRouter>
),
document.getElementById('root'),
);
