import React from 'react';
import {NavLink} from "react-router-dom"

const CollectionSum = (props) => {
    return (
        <section className="collection-sum">
            <div className="container">
                <div className="row">
                    <div className="col-4 all">
                        <NavLink to = "/all-collection" exact = {true}>
                            <div className="wrapper">
                                <div className="content">
                                    <span className="off">
                                            <span>50%</span>
                                            <span>OFF</span>
                                    </span><br/>
                                    <span className="title">ALL COLLECTIONS</span><br/>
                                    <span className="des">FOR WOMEN</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <NavLink to = "/featured-collection" exact = {true}>
                                    <div className="background featured"></div>
                                    <div className="title">Featured Collection</div>
                                </NavLink>
                            </div>
                            <div className="col-4">
                                <NavLink to = "/hot-collection" exact = {true}>
                                    <div className="background hot"></div>
                                    <div className="title">Hot Collection</div>
                                </NavLink>
                            </div>
                            <div className="col-4">
                                <NavLink to = "/latest-collection" exact = {true}>
                                    <div className="background latest"></div>
                                    <div className="title">Latest Collection</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <NavLink to = "/minimal-collection" exact = {true}>
                                    <div className="background minimal"></div>
                                    <div className="title">Minimal Collection</div>
                                </NavLink>
                            </div>
                            <div className="col-4">
                                <NavLink to = "/modern-collection" exact = {true}>
                                    <div className="background modern"></div>
                                    <div className="title">Modern Collection</div>
                                </NavLink>
                            </div>
                            <div className="col-4">
                                <NavLink to = "/summer-collection" exact = {true}>
                                    <div className="background summer"></div>
                                    <div className="title">Summer Collection</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionSum;