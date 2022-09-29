
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/registerState';
import login from './components/login';


function App() {
 
  return (
 
    <BrowserRouter>
        <Switch>

            <Route path="/register"  component={Register}/>
            <Route path="/login"  component={login}/>
        </Switch>
    </BrowserRouter>
  
  
  );
}

export default App;
