import React from 'react';
import TinySlider from "tiny-slider-react";
const settings = {
    items: 3,
    nav: false
}
const CustomerSay = () => {
    return (
        <section className="customer-say">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="title">What our customers say</h1>
                        <TinySlider settings = {settings} className="slide">
                            <div className="comment">
                                <img 
                                    className="avatar"
                                    src = {require("../../../../Assets/images/section-customer-say/1.webp")}
                                />
                                <div className="content">
                                    <div className="say">
                                        "Our leggings shopify theme is a best, popular, modern and clean. Why our shopify theme & template is so Special. Because we have unique and vary clean simple design."
                                    </div>
                                    <div>
                                        by <strong>RICARDO SANTOS</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <img 
                                    className="avatar"
                                    src = {require("../../../../Assets/images/section-customer-say/1.webp")}
                                />
                                <div className="content">
                                    <div className="say">
                                        "Our leggings shopify theme is a best, popular, modern and clean. Why our shopify theme & template is so Special. Because we have unique and vary clean simple design."
                                    </div>
                                    <div>
                                        by <strong>RICARDO SANTOS</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <img 
                                    className="avatar"
                                    src = {require("../../../../Assets/images/section-customer-say/1.webp")}
                                />
                                <div className="content">
                                    <div className="say">
                                        "Our leggings shopify theme is a best, popular, modern and clean. Why our shopify theme & template is so Special. Because we have unique and vary clean simple design."
                                    </div>
                                    <div>
                                        by <strong>RICARDO SANTOS</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <img 
                                    className="avatar"
                                    src = {require("../../../../Assets/images/section-customer-say/1.webp")}
                                />
                                <div className="content">
                                    <div className="say">
                                        "Our leggings shopify theme is a best, popular, modern and clean. Why our shopify theme & template is so Special. Because we have unique and vary clean simple design."
                                    </div>
                                    <div>
                                        by <strong>RICARDO SANTOS</strong>
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSay;