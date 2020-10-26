import React from 'react';
import {Switch, Route} from "react-router-dom";
import CheckoutShoppingCart from '../CheckoutShoppingCart/CheckoutShoppingCart';
import AllCollection from '../Collections/AllCollection';
import FeaturedCollection from '../Collections/FeaturedCollection';
import HotCollection from '../Collections/HotCollection';
import LatestCollection from '../Collections/LatestCollection';
import MinimalCollection from '../Collections/MinimalCollection';
import ModernCollection from '../Collections/ModernCollection';
import SummerCollection from '../Collections/SummerCollection';
import Home from '../Home/Home';
import ProductDetail from '../ProductDetail/ProductDetail';
import ShoppingCartDetail from '../ShoppingCart/ShoppingCartDetail';
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
            <Route path = "/all-collection" exact = {true} component = {AllCollection}></Route>
            <Route path = "/product/:nameSlug" exact = {true} component = {ProductDetail}></Route>
            <Route path = "/shopping-cart" exact = {true} component = {ShoppingCartDetail}></Route>
            <Route path = "/check-out" exact = {true} component = {CheckoutShoppingCart}></Route>
            <Route component = {Home}></Route>
        </Switch>
    );
};

export default RouterURL;