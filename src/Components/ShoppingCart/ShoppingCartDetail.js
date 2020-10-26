// direct child of RouterURL
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll, faPen, faTimesCircle, faLock} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartDetail = (props) => {
    return (
        <section className="shopping-cart-detail">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Your Shopping Cart</h4>
                    </div>
                    <div className="col-auto">
                        <NavLink
                            to = "/"
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
                                <div className="row product-row">
                                    <div className="col-2 img">
                                        <img 
                                            src="https://images.unsplash.com/photo-1570949144026-8f8141748760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                                            alt="product"
                                        />
                                    </div>
                                    <div className="col-10 product-detail">
                                        <div className="row name">
                                            <div className="col">
                                                <NavLink
                                                    to = "/"
                                                    exact = {true}
                                                >
                                                    Fitness Trousers For Women White
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="col">$210.00</div>
                                        </div>
                                        <div className="row quantity-title">
                                            <div className="col">
                                                Quantity
                                            </div>
                                        </div>
                                        <div className="row quantity-row">
                                            <div className="col-4 quantity">
                                                <div className="wrap">
                                                    <input
                                                        type="number"
                                                        defaultValue="1"
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
                                <div className="row product-row">
                                    <div className="col-2 img">
                                        <img 
                                            src="https://images.unsplash.com/photo-1570949144026-8f8141748760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                                            alt="product"
                                        />
                                    </div>
                                    <div className="col-10 product-detail">
                                        <div className="row name">
                                            <div className="col">
                                                <NavLink
                                                    to = "/"
                                                    exact = {true}
                                                >
                                                    Fitness Trousers For Women White
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            <div className="col">$210.00</div>
                                        </div>
                                        <div className="row quantity-title">
                                            <div className="col">
                                                Quantity
                                            </div>
                                        </div>
                                        <div className="row quantity-row">
                                            <div className="col-4 quantity">
                                                <div className="wrap">
                                                    <input
                                                        type="number"
                                                        defaultValue="1"
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 total-amount">
                        <div className="content">
                            <div className="title">Your Cart Total</div>
                            <div className="info">
                                <div className="money">
                                    <span>€854.87</span>
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

export default ShoppingCartDetail;