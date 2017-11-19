import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import BoatsList from './BoatsList';

export default function Routes (){
  return(
    <main className="app container">
      <Switch>
        <Redirect exact from='/' to='/boats'/>
        <Route path='/boats' component={BoatsList}/>
      </Switch>
    </main>
  );
}

