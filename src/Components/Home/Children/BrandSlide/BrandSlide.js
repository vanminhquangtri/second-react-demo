import React from 'react';
import TinySlider from "tiny-slider-react";
const settings = {
    mouseDrag: true,
    items: 4,
    nav: false,
    speed: 500,
    controls: true,
    autoplay: true,
    autoplayTimeout: 3000,
};

const BrandSlide = (props) => {
    return (
        <section className="brand-slide">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TinySlider settings={settings} className="slide">
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/1.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/2.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/3.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/4.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/5.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/6.webp").default} alt="brand logo"/>
                            </div>
                            <div className="brand-item">
                                <img src = {require("../../../../Assets/images/section-brand-slide/7.webp").default} alt="brand logo"/>
                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSlide;