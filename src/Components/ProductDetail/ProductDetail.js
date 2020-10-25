/**@jsx jsx*/
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";
import urlSlug from "url-slug";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import TermDetail from './TermDetail';
import AlsoBought from './AlsoBoughtModal/AlsoBought';
library.add(fab)

const settings = {
    nav: true,
    controls: false,
    items: 1
}
const ProductDetail = (props) => {
    const [state, setState] = useState({
        added_quantity: 1
    });
    const {added_quantity} = state;
    const {Products, Currency} = props.Data;
    const {dispatch} = props;
    const {nameSlug} = props.match.params;
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, Product, quantity) => {
        switch (currency) {
            case "USD":
                return "$ " + formatNumber((Product.price*quantity).toFixed(2))

            case "EUR":
                return "€ " + formatNumber((Product.price*quantity * 0.84).toFixed(2))

            case "GBP":
                return "£ " + formatNumber((Product.price*quantity * 0.76).toFixed(2))

            default:
                return "$ " + formatNumber((Product.price*quantity).toFixed(2))
        }
    }
    // change added_quantity when fill in the input
    const changeAddedAmount = (ev) => {
        const target = ev.target;
        let value = target.value;
        if (value === "") {value = 0}
        setState(() => {
            return {
                added_quantity: parseFloat(value)
            }
        })
    }
    // increase added_quantity when click plus button
    const increaseAddedAmount = () => {
        setState((prevState) => {
            return {
                added_quantity: prevState.added_quantity + 1
            }
        })
    }
    // decrease added_quantity when click substract button
    const decreaseAddedAmount = () => {
        if (added_quantity > 0) {
            setState((prevState) => {
                return {
                    added_quantity: prevState.added_quantity - 1
                }
            })
        }
    }
    useEffect(() => {
        // set slide image for background of each nav button
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
        // zoom image on hover
        const imgContainers = document.querySelectorAll(".img-container");
        for (let i = 0; i <imgContainers.length; i++){
            imgContainers[i].addEventListener("mousemove", (ev) => {
            const imgContainerPos = imgContainers[i].getBoundingClientRect();
            const imgContainerX = imgContainerPos.x;
            const imgContainerY = imgContainerPos.y;
            const speed = 0.25;
            var startXM = imgContainerX;
            var startYM = imgContainerY;
                imgContainers[i].style.backgroundSize = "200% 230%";
                const xM = ev.pageX;
                const yM = ev.pageY;
                const xChange = xM - startXM;
                const yChange = yM - startYM;
                var HozPos = xChange * speed;
                var VerPos = yChange * speed;
                if (HozPos >= 100){
                    HozPos = 100
                }
                if (VerPos >= 100){
                    VerPos = 100
                }
                imgContainers[i].style.backgroundPosition = `${HozPos}% ${VerPos}%`;
                imgContainers[i].addEventListener("mouseleave", () => {
                    imgContainers[i].style.backgroundSize = "cover";
                    imgContainers[i].style.backgroundPosition = "center";
                })
            })
        }
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
                                        <h5 className="product-title">{Product.name}</h5>
                                    </div>
                                </div>
                                <div className="row with-slide">
                                    <div className="col-6 image">
                                        <TinySlider settings = {settings}>
                                            {
                                                Product.slide__image.map((image, index) => {
                                                    return (
                                                        <div className="img-container"
                                                            css = {css`
                                                                background-image: url(${image})
                                                            `}
                                                            key = {index}
                                                        ></div>
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
                                                    <div className="col-9"><strong>{showMoney(Currency.currency, Product, 1)}</strong></div>
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
                                                    <span className="button decrease"
                                                        onClick = {()=>decreaseAddedAmount()}
                                                    >-</span>
                                                    <input type="number" min="1" className="added-amount"
                                                        value = {added_quantity}
                                                        onChange = {(ev)=>changeAddedAmount(ev)}
                                                    />
                                                    <span className="button increase"
                                                        onClick = {()=>{increaseAddedAmount()}}
                                                    >+</span>
                                                    </div>
                                                </div>
                                                <div className="row sub-total">
                                                    <div className="col-3">Total</div>
                                                    <div className="col-9">
                                                        {showMoney(Currency.currency, Product, added_quantity)}
                                                    </div>
                                                </div>
                                                <div className="row cart-link">
                                                    <div className="col-6 cart">
                                                        <div className="content"
                                                            onClick = {()=>{dispatch({type: "ADD", id: Product.id, quantity: added_quantity})}}
                                                        >Add To Cart</div>
                                                    </div>
                                                    <div className="col-6 link">
                                                        <div className="content">
                                                            <NavLink
                                                                to="/"
                                                                exact = {true}
                                                            >
                                                                Buy Now
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
                                <TermDetail Product = {Product}></TermDetail>
                                <AlsoBought Product = {Product}></AlsoBought>
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