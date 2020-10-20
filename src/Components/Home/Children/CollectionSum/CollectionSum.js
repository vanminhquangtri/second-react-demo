import React from 'react';
import {NavLink} from "react-router-dom"

const CollectionSum = (props) => {
    return (
        <section className="collection-sum">
            <div className="container">
                <div className="row">
                    <div className="col-4 all">
                        <NavLink to = "/" exact = {true}>
                            <div className="content">
                                <span className="off">
                                        <span>50%</span>
                                        <span>OFF</span>
                                </span><br/>
                                <span className="title">ALL COLLECTIONS</span><br/>
                                <span className="des">FOR WOMEN</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </section>
    );
};

export default CollectionSum;