// direct child of ProductModal Component
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
const settings = {
    nav: true,
    controls: false,
    items: 1
}
const ModalDetail = (props) => {
    const {Products} = props;
    useEffect(() => {
        const navBtn = document.querySelectorAll(".tns-nav button");
        Products.slide__image.forEach((image, index) => {
            for (let i = 0; i < navBtn.length; i++){
                if (index === i){
                    navBtn[i].style.backgroundImage = `url(${image})`
                }
            }
        })
    })
    return (
        <div className="modal-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 image">
                        <TinySlider settings = {settings}>
                            {
                                Products.slide__image.map((image, index) => {
                                    return (
                                        <img
                                            src = {image}
                                            alt = {Products.name}
                                            key = {index}
                                        />
                                    )
                                })
                            }
                        </TinySlider>
                    </div>
                    <div className="col-6 info">
                        <div className="content">
                            <div className="title">
                                <div className="row name">
                                    <div className="col-4">Name:</div>
                                    <div className="col-8">Modern Beauty Women Clothing White</div>
                                </div>
                                <div className="row cat">
                                    <div className="col-4">Collection:</div>
                                    <div className="col-8">Featured</div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="row price">
                                    <div className="col-4">Price</div>
                                    <div className="col-8">Product price</div>
                                </div>
                                <div className="row availability">
                                    <div className="col-4">Availability</div>
                                    <div className="col-8">Yes</div>
                                </div>
                                <div className="row des">
                                    <div className="col-4">Description</div>
                                    <div className="col-8">Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialt...</div>
                                </div>
                                <div className="row colors">
                                    <div className="col-4">Color</div>
                                    <div className="col-8">
                                        <div className="colors-container">
                                            <div className="color"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="action">
                                <div className="row quantity">
                                    <div className="col-4">Quantity</div>
                                    <div className="col-8">
                                        <span className="button">-</span>
                                        <input type="number" defaultValue="1" placeholder="1" min="1"/>
                                        <span className="button">+</span>
                                    </div>
                                </div>
                                <div className="row sub-total">
                                    <div className="col-4">Total</div>
                                    <div className="col-8">
                                        $410.00
                                    </div>
                                </div>
                                <div className="row cart-link">
                                    <div className="col-6 cart">
                                        <div className="content">Add To Cart</div>
                                    </div>
                                    <div className="col-6 link">
                                        <div className="content">
                                            <NavLink
                                                to="/"
                                                exact = {true}
                                            >
                                                View Details
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDetail;