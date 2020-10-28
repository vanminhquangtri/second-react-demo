import React from 'react';
import {NavLink} from "react-router-dom";
import "animate.css";

const TopSlide = (props) => {
    return (
        <section className="top-slide">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div id="top-slide" className="carousel slide" data-ride="carousel" data-interval="5000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={require("../../../../Assets/images/section-top-slide/1.jpg").default} alt="First slide" />
                                    <div className="carousel-caption slide-1">
                                        <h5 className="title animate__animated animate__bounceInDown">
                                            <span>
                                                Fashion's
                                            </span>
                                        </h5>
                                        <p className="des animate__animated animate__bounceInLeft">
                                            <span>
                                                Our products are crafted with high quality fabrics and innovative technology to handle even your sweatiest sessions.
                                            </span>
                                        </p>
                                        <div className="link animate__animated animate__bounceInRight">
                                            <NavLink 
                                                to="/" 
                                                exact={true}
                                            >
                                                <span className="">SHOP NOW</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require("../../../../Assets/images/section-top-slide/2.jpg").default} alt="First slide" />
                                    <div className="carousel-caption slide-2">
                                        <h5 className="title animate__animated animate__bounceInDown">
                                            <span>
                                                Women's Fashion
                                            </span>
                                        </h5>
                                        <p className="des animate__animated animate__rotateIn">
                                            <span>
                                                Our products are crafted with high quality fabrics and innovative technology to handle even your sweatiest sessions.
                                            </span>
                                        </p>
                                        <div className="link animate__animated animate__zoomIn">
                                            <NavLink 
                                                to="/" 
                                                exact={true}
                                            >
                                                <span className="">COLLECT NOW</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require("../../../../Assets/images/section-top-slide/3.webp").default} alt="First slide" />
                                    <div className="carousel-caption slide-3">
                                        <h5 className="title animate__animated animate__slideInRight">
                                            <span>
                                                LATEST COLLECTION
                                            </span>
                                        </h5>
                                        <p className="des animate__animated animate__rollIn">
                                            <span>
                                                Our products are crafted with high quality fabrics and innovative technology to handle even your sweatiest sessions.
                                            </span>
                                        </p>
                                        <div className="link animate__animated animate__lightSpeedInLeft">
                                            <NavLink 
                                                to="/" 
                                                exact={true}
                                            >
                                                <span className="">SHOP NOW</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#top-slide" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#top-slide" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSlide;