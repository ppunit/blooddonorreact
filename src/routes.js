
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
import App from './App';
import Home from './component/home';

 
const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route  path='/' component={App} />
        {/* <Route  path='/counter' component={Home} /> */}
    </Switch>
</BrowserRouter>
);
 
export default Routes;