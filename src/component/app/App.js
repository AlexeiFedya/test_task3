import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {HomePage} from '../../pages/HomePage'


function App() {
  return (
    <>
      <Switch>
        <Route
          path='/'
          component = {HomePage} 
          exact />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
