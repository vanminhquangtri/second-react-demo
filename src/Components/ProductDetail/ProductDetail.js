/**@jsx jsx*/
import {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";
import urlSlug from "url-slug";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const settings = {
    nav: true,
    controls: false,
    items: 1
}
const ProductDetail = (props) => {
    const {Products, Currency} = props.Data;
    const {nameSlug} = props.match.params;
    const showPrice = (currency, item) => {
        switch (currency) {
            case "USD":
                return "$ " + item.price.toFixed(2)
            case "EUR":
                return "€ " + (item.price * 0.84).toFixed(2)

            case "GBP":
                return "£ " + (item.price * 0.76).toFixed(2)

            default:
                return "$ " + item.price.toFixed(2)
        }
    }
    useEffect(() => {
        const navBtn = document.querySelectorAll(".tns-nav button");
        const currentProduct = Products.find((product) => {
            return urlSlug(product.name) === nameSlug;
        })
        currentProduct.slide__image.forEach((image, index) => {
            for (let i = 0; i < navBtn.length; i++){
                if (index === i){
                    navBtn[i].style.backgroundImage = `url(${image})`
                }
            }
        })
    })
    return (
        <section className="product-detail">
            {
                Products.map((Product, index) => {
                    if (urlSlug(Product.name) === nameSlug) {
                        return (
                            <div className="container current-product" key = {index}>
                                <div className="row title">
                                    <div className="col">
                                        <h3 className="product-title">{Product.name}</h3>
                                    </div>
                                </div>
                                <div className="row with-slide">
                                    <div className="col-6 image">
                                        <TinySlider settings = {settings}>
                                            {
                                                Product.slide__image.map((image, index) => {
                                                    return (
                                                        <img
                                                            src = {image}
                                                            alt = {Product.name}
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
                                                    <div className="col-3">Name:</div>
                                                    <div className="col-9">{Product.name}</div>
                                                </div>
                                                <div className="row cat">
                                                    <div className="col-3">Collection:</div>
                                                    <div className="col-9">{Product.category}</div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="row price">
                                                    <div className="col-3">Price</div>
                                                    <div className="col-9"><strong>{showPrice(Currency.currency, Product)}</strong></div>
                                                </div>
                                                <div className="row availability">
                                                    <div className="col-3">Availability</div>
                                                    <div className="col-9">Yes</div>
                                                </div>
                                                <div className="row des">
                                                    <div className="col-3">Description</div>
                                                    <div className="col-9">{Product.description}</div>
                                                </div>
                                                <div className="row colors">
                                                    <div className="col-3">Color</div>
                                                    <div className="col-9">
                                                        <div className="colors-container">
                                                            {
                                                                Product.color.map((color, index) => {
                                                                    return (
                                                                        <div key={index} className="color" css = {css`
                                                                            background-color: ${color}
                                                                        `}></div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <div className="row quantity">
                                                    <div className="col-3">Quantity</div>
                                                    <div className="col-9">
                                                        <span className="button">-</span>
                                                        <input type="number" defaultValue="1" placeholder="1" min="1"/>
                                                        <span className="button">+</span>
                                                    </div>
                                                </div>
                                                <div className="row sub-total">
                                                    <div className="col-3">Total</div>
                                                    <div className="col-9">
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
                                                <div className="row refund">
                                                    <div className="col-3">Refund policy</div>
                                                    <div className="col-9">
                                                        Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
                                                    </div>
                                                </div>
                                                <div className="row payment">
                                                    <div className="col-3">Payment accepted</div>
                                                    <div className="col-9">
                                                        <div className="payment-card">
                                                            <FontAwesomeIcon icon={['fab', 'cc-visa']} className="icon" title="Visa Card"/>
                                                            <FontAwesomeIcon icon={['fab', 'cc-mastercard']} className="icon" title="Master Card"/>
                                                            <FontAwesomeIcon icon={['fab', 'cc-amex']} className="icon" title="American Express"/>
                                                            <FontAwesomeIcon icon={['fab', 'cc-discover']} className="icon" title="Discover Card"/>
                                                            <FontAwesomeIcon icon={['fab', 'cc-paypal']} className="icon" title="Paypal"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row share">
                                                    <div className="col-3">Share</div>
                                                    <div className="col-9">
                                                        <div className="link">
                                                            <div className="link-container" title="Facebook">
                                                                <NavLink to = "/" exact={true}>
                                                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon"/>
                                                                </NavLink>
                                                            </div>
                                                            <div className="link-container" title="Twitter">
                                                                <NavLink to = "/" exact={true}>
                                                                    <FontAwesomeIcon icon={['fab', 'twitter']} className="icon"/>
                                                                </NavLink>
                                                            </div>
                                                            <div className="link-container" title="Google Plus">
                                                                <NavLink to = "/" exact={true}>
                                                                    <FontAwesomeIcon icon={['fab', 'google-plus-g']} className="icon"/>
                                                                </NavLink>
                                                            </div>
                                                            <div className="link-container" title="Instagram">
                                                                <NavLink to = "/" exact={true}>
                                                                    <FontAwesomeIcon icon={['fab', 'instagram']} className="icon"/>
                                                                </NavLink>
                                                            </div>
                                                            <div className="link-container" title="Linkedin">
                                                                <NavLink to = "/" exact={true}>
                                                                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon"/>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="term"></div>
                            </div>
                        )
                    }
                    return "";
                })
            }
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ProductDetail)