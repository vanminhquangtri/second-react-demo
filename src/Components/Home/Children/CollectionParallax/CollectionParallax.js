import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const CollectionParallax = (props) => {
    useEffect(() => {
        const CP = document.querySelector(".collection-parallax"); // CP stand for .collection-parallax
        const CPPos = CP.getBoundingClientRect().y;
        let startBgPos = 50;
        CP.style.backgroundPosition = `100% ${startBgPos}%`;
        var startY = 2000;
        const speed = 0.05;
        window.addEventListener("scroll", (ev)=>{
        const currentY = window.scrollY;
        if (currentY + window.innerHeight >= CPPos) {  
            CP.style.backgroundPosition = `100% ${startBgPos - (currentY - startY) * speed}%`;
        } else {CP.style.backgroundPosition = `100% 120%`;}
        })
    })
    return (
        <section className="collection-parallax">
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
                                    to = "/"
                                    exact = {true}
                                >
                                    SHOP NOW
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionParallax;