import React from 'react';
import {NavLink} from "react-router-dom";
const Promotion = () => {
    return (
        <section className="promotion">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <NavLink to = "/all-collection" exact = {true}>
                            <div className="wrapper coat">
                                <div className="content">
                                    <div className="shop">SHOP NOW</div>
                                    <div className="title">WOMEN COAT</div>
                                    <div className="des">FOR STYLIST</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to = "/all-collection" exact = {true}>
                            <div className="wrapper men">
                                <div className="content">
                                    <div className="des">SALE OFF</div>
                                    <div className="title">WOMEN &#38; MEN</div>
                                    <div className="shop">SHOP NOW</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to = "/all-collection" exact = {true}>
                            <div className="wrapper women">
                                <div className="content">
                                    <div className="shop">SHOP NOW</div>
                                    <div className="des">
                                        <span>
                                            10% <br/>
                                            SALE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotion;