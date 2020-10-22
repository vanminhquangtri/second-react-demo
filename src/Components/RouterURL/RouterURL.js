import React from 'react';
import {Switch, Route} from "react-router-dom";
import FeaturedCollection from '../Collections/FeaturedCollection';
import HotCollection from '../Collections/HotCollection';
import LatestCollection from '../Collections/LatestCollection';
import MinimalCollection from '../Collections/MinimalCollection';
import ModernCollection from '../Collections/ModernCollection';
import SummerCollection from '../Collections/SummerCollection';
import Home from '../Home/Home';
const RouterURL = (props) => {
    return (
        <Switch>
            <Route path = "/" exact = {true} component = {Home}></Route>
            <Route path = "/latest-collection" exact = {true} component = {LatestCollection}></Route>
            <Route path = "/featured-collection" exact = {true} component = {FeaturedCollection}></Route>
            <Route path = "/modern-collection" exact = {true} component = {ModernCollection}></Route>
            <Route path = "/minimal-collection" exact = {true} component = {MinimalCollection}></Route>
            <Route path = "/hot-collection" exact = {true} component = {HotCollection}></Route>
            <Route path = "/summer-collection" exact = {true} component = {SummerCollection}></Route>
            <Route component = {Home}></Route>
        </Switch>
    );
};

export default RouterURL;