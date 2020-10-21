import React from 'react';
import './Assets/css/index.scss';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from './Components/RouterURL/RouterURL';
import TopBar from './Components/TopBar/TopBar';
import BackToTop from './Components/BackToTop/BackToTop';
import Footer from './Components/Footer/Footer';
import TopNav from './Components/TopNav/TopNav';
import Store from "./Store/Store";
import {Provider} from "react-redux"

const App = (props) => {
    return (
        <Provider store = {Store}>
            <Router>
                <TopBar></TopBar>
                <TopNav></TopNav>
                <RouterURL></RouterURL>
                <Footer></Footer>
                <BackToTop/>
            </Router>
        </Provider>
    );
};

export default App;