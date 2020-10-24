/**@jsx jsx*/
import {useEffect} from 'react';
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
    const {Products, dispatch} = props;
    const {Currency} = props.Data;
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
                                        <span className="button">-</span>
                                        <input type="number" defaultValue="1" placeholder="1" min="1"/>
                                        <span className="button">+</span>
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
                                        onClick = {()=>{dispatch({type: "ADD", id: Products.id, amount: 1})}}
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