/* dont re-use the ModalDetail Component to avoid confuse nav button of slide */
/**@jsx jsx*/
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";
import urlSlug from "url-slug";
import NavImage from '../../GeneralModules/NavImage';

const settings = {
    nav: true,
    controls: false,
    items: 1
}
const AlsoBoughtModalDetail = (props) => {
    const [state, setState] = useState({
        added_quantity: 1
    });
    const {added_quantity} = state;
    const {Products, dispatch} = props;
    const {Currency} = props.Data;
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, quantity) => {
        const value = formatNumber((Products.price * quantity * Currency.rate).toFixed(2));
        switch (currency) {
            case "USD":
                return "$ " + value;

            case "EUR":
                return "€ " + value;

            case "GBP":
                return "£ " + value;

            default:
                return "$ " + value;
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
        // use slide images for nav buttons (this will change one page has more than 1 slide)
        NavImage(".also-bought .tns-nav button", Products)
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
                                            src = {image.default}
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
                                    <div className="col-8">{Products.name}</div>
                                </div>
                                <div className="row cat">
                                    <div className="col-4">Collection:</div>
                                    <div className="col-8">{Products.category}</div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="row price">
                                    <div className="col-4">Price</div>
                                    <div className="col-8"><strong>{showMoney(Currency.currency, 1)}</strong></div>
                                </div>
                                <div className="row availability">
                                    <div className="col-4">Availability</div>
                                    <div className="col-8">Yes</div>
                                </div>
                                <div className="row des">
                                    <div className="col-4">Description</div>
                                    <div className="col-8">{Products.description}</div>
                                </div>
                                <div className="row colors">
                                    <div className="col-4">Color</div>
                                    <div className="col-8">
                                        <div className="colors-container">
                                            {
                                                Products.color.map((color, index) => {
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
                                    <div className="col-4">Quantity</div>
                                    <div className="col-8">
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
                                    <div className="col-4">Total</div>
                                    <div className="col-8">
                                        {showMoney(Currency.currency, added_quantity)} 
                                    </div>
                                </div>
                                <div className="row cart-link">
                                    <div className="col-6 cart">
                                        <div className="content"
                                        onClick = {()=>{dispatch({type: "ADD", id: Products.id, quantity: added_quantity})}}
                                        >
                                            Add To Cart
                                        </div>
                                    </div>
                                    <div className="col-6 link">
                                        <div className="content">
                                            <NavLink
                                                to = {`/product/${urlSlug(Products.name)}`}
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
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(AlsoBoughtModalDetail)