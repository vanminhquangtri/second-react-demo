/**@jsx jsx*/
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";

const settings = {
    nav: true,
    controls: false,
    items: 1
}
const ModalDetail = (props) => {
    const [state, setState] = useState({
        added_amount: 1
    });
    const {added_amount} = state;
    const {Products, dispatch} = props;
    const {Currency} = props.Data;
    // fortmat price (currency and operator and decimal)
    const showPrice = (currency, item) => {
        switch (currency) {
            case "USD":
                return "$ " + Products.price.toFixed(2)
            case "EUR":
                return "€ " + (Products.price * 0.84).toFixed(2)

            case "GBP":
                return "£ " + (Products.price * 0.76).toFixed(2)

            default:
                return "$ " + Products.price.toFixed(2)
        }
    }
    // change added_amount when fill in the input
    const changeAddedAmount = (ev) => {
        const target = ev.target;
        const value = parseFloat(target.value);
        setState(() => {
            return {
                added_amount: value
            }
        })
    }
    // increase added_amount when click plus button
    const increaseAddedAmount = () => {
        setState((prevState) => {
            return {
                added_amount: prevState.added_amount + 1
            }
        })
    }
    // decrease added_amount when click substract button
    const decreaseAddedAmount = () => {
        if (added_amount > 0) {
            setState((prevState) => {
                return {
                    added_amount: prevState.added_amount - 1
                }
            })
        }
    }
    useEffect(() => {
        //use slide images for nav buttons
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
                                    <div className="col-8"><strong>{showPrice(Currency.currency)}</strong></div>
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
                                            value = {added_amount}
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
                                        {showPrice(Currency.currency, Products.price)}
                                    </div>
                                </div>
                                <div className="row cart-link">
                                    <div className="col-6 cart">
                                        <div className="content"
                                        onClick = {()=>{dispatch({type: "ADD", id: Products.id, amount: added_amount})}}
                                        >
                                            Add To Cart
                                        </div>
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
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ModalDetail)