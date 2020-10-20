import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from '../Home/Home';
const RouterURL = (props) => {
    return (
        <Switch>
            <Route path = "/" exact = {true} component = {Home}></Route>
            <Route component = {Home}></Route>
        </Switch>
    );
};

export default RouterURL;