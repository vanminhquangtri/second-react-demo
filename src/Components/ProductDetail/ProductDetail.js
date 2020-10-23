/**@jsx jsx*/
import {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";
import urlSlug from "url-slug";
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