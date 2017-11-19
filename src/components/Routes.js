import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import BoatsList from './BoatsList';
import CreateBoat from './CreateBoat';
import EditBoat from './EditBoat';


export default function Routes (){
  return(
    <main className="app container">
      <Switch>
        <Redirect exact from='/' to='/boats'/>
        <Route exact path='/boats' component={BoatsList}/>
        <Route path='/boats/create' component={CreateBoat} />
        <Route exact path='/boats/:boatId(\d+)' component={EditBoat} />
      </Switch>
    </main>
  );
}

