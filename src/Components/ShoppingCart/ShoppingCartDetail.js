// direct child of RouterURL
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll, faPen, faTimesCircle, faLock} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import urlSlug from "url-slug";

const ShoppingCartDetail = (props) => {
    const {Cart, Products, Currency} = props.Data;
    const {dispatch} = props;
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, quantity, item) => {
        switch (currency) {
            case "USD":
                return "$ " + formatNumber((item.price*quantity).toFixed(2))

            case "EUR":
                return "€ " + formatNumber((item.price*quantity * 0.84).toFixed(2))

            case "GBP":
                return "£ " + formatNumber((item.price*quantity * 0.76).toFixed(2))

            default:
                return "$ " + formatNumber((item.price*quantity).toFixed(2))
        }
    }
    // count quantity of a product in Shopping Cart
    const countProduct = (id) => {
        let count = 0;
        Cart.forEach((product) => {
            if (product.id === id) {
                count += 1;
            }
        })
        return count;
    }
    /* Remove duplicate product in Cart arr based on ID*/
        const currentCart = [...Cart];
        // get ID list of current Cart
        let currentIdList = [];
        currentCart.forEach((product) => {
            currentIdList.push(product.id);
        })
        // removed duplicated ID
        let removedDuplicateIdList = [];
        currentIdList.forEach((id) => {
            if (!removedDuplicateIdList.includes(id)){
                removedDuplicateIdList.push(id)
            }
        })
        // create product array base on ID list, use this array to render shopping cart
        let splicedProductsList = [];
        removedDuplicateIdList.forEach((id) => {
            Products.forEach((product)=>{
                if (product.id === id){
                    splicedProductsList.push(product)
                }
            })
        })
    /* End remove duplicate product in Cart arr based on ID*/
    // Calculate total amount of Shopping Cart (re-use currentIdList)*/
    var totalAmount = 0;
    currentIdList.forEach((id) => {
        Products.forEach((product)=>{
            if (product.id === id){
                totalAmount += product.price // (default is USD)
            }
        })
    })
    // fortmat money (currency and operator and decimal)
    const showMoneyTotal = (currency, amount) => {
        switch (currency) {
            case "USD":
                return "$ " + formatNumber((amount).toFixed(2))

            case "EUR":
                return "€ " + formatNumber((amount * 0.84).toFixed(2))

            case "GBP":
                return "£ " + formatNumber((amount * 0.76).toFixed(2))

            default:
                return "$ " + formatNumber((amount).toFixed(2))
        }
    }
    
    return (
        <section className="shopping-cart-detail">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Your Shopping Cart</h4>
                    </div>
                    <div className="col-auto">
                        <NavLink
                            to = "/all-collection"
                            exact = {true}
                        >
                            <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                            Continue Shopping
                        </NavLink>
                    </div>
                </div>
                <div className="row shopping-cart-content">
                    <div className="col-6 order">
                        <div className="content">
                            <div className="title">Order Summary</div>
                            <div className="info">
                                <div className="container">
                                    {
                                        splicedProductsList.map((product, index) => {
                                            return (
                                                <div className="row product-row">
                                                    <div className="col-2 img">
                                                        <img 
                                                            alt="product"
                                                            src = {product.main__image}
                                                        />
                                                    </div>
                                                    <div className="col-10 product-detail">
                                                        <div className="row name">
                                                            <div className="col">
                                                                <NavLink
                                                                    to = {`/product/${urlSlug(product.name)}`}
                                                                    exact = {true}
                                                                >
                                                                    {product.name}
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                        <div className="row price">
                                                            <div className="col">{showMoney(Currency.currency, 1, product)}</div>
                                                        </div>
                                                        <div className="row quantity-title">
                                                            <div className="col">
                                                                Quantity
                                                            </div>
                                                        </div>
                                                        <div className="row quantity-row">
                                                            <div className="col-3 quantity">
                                                                <div className="wrap">
                                                                    <input
                                                                        type="number"
                                                                        defaultValue = {countProduct(product.id)}
                                                                        min = {0}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-3 update-quantity">
                                                                <div className="wrap">
                                                                    <FontAwesomeIcon icon = {faPen} className="icon"/>
                                                                    Update
                                                                </div>
                                                            </div>
                                                            <div className="col-3 remove-product">
                                                                <div className="wrap">
                                                                    <FontAwesomeIcon icon = {faTimesCircle} className="icon"/>
                                                                    Remove
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 total-amount">
                        <div className="content">
                            <div className="title">Your Cart Total</div>
                            <div className="info">
                                <div className="money">
                                    <span> {showMoneyTotal(Currency.currency, totalAmount)} </span>
                                </div>
                                <div className="check-out">
                                    <div className="wrap">
                                        <FontAwesomeIcon icon = {faLock} className = "icon"/>
                                        <NavLink
                                            to="/"
                                            exact={true}
                                        >
                                            Proceed To Checkout
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="payment-card">
                                    <img
                                        alt="payment-card"
                                        src={require("../../Assets/images/section-shopping-cart-detail/payment.webp")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ShoppingCartDetail)
