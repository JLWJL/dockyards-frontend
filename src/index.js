//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/test';


ReactDOM.render((
  <BrowserRouter basename="/">
    <Test/>
  </BrowserRouter>
),
document.getElementById('root'),
);
