import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './core/Home';
import {Cart} from './core/Components'
const  Router=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />              
                <Route path='/cart' exact component={Cart} />              
            </Switch>
        </BrowserRouter>
    )
}
export default Router;