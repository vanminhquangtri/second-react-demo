import React, {useEffect} from 'react';
import {Parallax} from 'react-parallax';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLayerGroup} from "@fortawesome/free-solid-svg-icons"

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <section className="about-us">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="wrap">
                            {/* mission */}
                            <Parallax 
                                bgImage={require("../../Assets/images/section-about-us/parrallax1.jpg").default} 
                                bgImageAlt="the cat"
                                strength={400}
                            >
                                <div className="content mission">
                                    <h1 className="title">Our Missions</h1>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Customer first
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Bring all the best to you
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        The leading fashion company
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        People is the key for development
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Being responsible with community
                                    </h4>
                                </div>
                            </Parallax>
                            {/* services */}
                            <Parallax 
                                bgImage={require("../../Assets/images/section-about-us/parrallax2.jpg").default} 
                                bgImageAlt="the cat"
                                strength={400}
                            >
                                <div className="content service">
                                    <h1 className="title">Our Services</h1>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Fashion collections
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        International transport
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        International cargo
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Building construction
                                    </h4>
                                    <h4>
                                        <FontAwesomeIcon icon = {faLayerGroup} className="icon"/>
                                        Import and export clothes
                                    </h4>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;