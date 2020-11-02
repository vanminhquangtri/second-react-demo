import React from 'react';
import {Parallax} from 'react-parallax';

import {NavLink} from "react-router-dom";

const CollectionParallax = (props) => {
    return (
        <section className="collection-parallax">
            <Parallax 
                bgImage={require("../../../../Assets/images/section-collection-parallax/parallax.jpg").default} 
                bgImageAlt="the cat"
                strength={400}
                blur={0}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="content">
                                <div className="title">
                                    COLLECTIONS
                                </div>
                                <div className="des">Collections or collections includes all forms of competitive physical activity or games which, through casual or organised participation, aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases.</div>
                                <div className="link">
                                    <NavLink
                                        to = "/all-collection"
                                        exact = {true}
                                    >
                                        SHOP NOW
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
            
        </section>
    );
};

export default CollectionParallax;