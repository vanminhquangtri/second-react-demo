// direct child of RouterURL
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartDetail = (props) => {
    return (
        <section className="shopping-cart-detail">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Shopping Cart</h4>
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
                <div className="row shipping-cart-content">
                    <div className="col-6 order">
                        <div className="content">
                            <div className="title">Order Summary</div>
                            <div className="info">
                                <div className="row product-row">
                                    <div className="col-2 img">
                                        <img 
                                            src="https://images.unsplash.com/photo-1570949144026-8f8141748760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                                            alt="product"
                                        />
                                    </div>
                                    <div className="col-10 product-detail">
                                        <div className="name">
                                            <NavLink
                                                to = "/"
                                                exact = {true}
                                            >
                                                Fitness Trousers For Women White
                                            </NavLink>
                                        </div>
                                        <div className="price">
                                            $210.00
                                        </div>
                                        <div className="quantity-title">Quantity</div>
                                        <div className="row quantity-row">
                                            <div className="quantity">
                                                <input
                                                    type="number"
                                                    value="1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 total-amount">
                        <div className="content">
                            <div className="title">Total Amount</div>
                            <div className="info">Detail Info</div>
                        </div>
                    </div>
                    <div className="col-3 shipping-fee">
                        <div className="content">
                            <div className="title">Estimated Shipping Fee</div>
                            <div className="info">Detail Info</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCartDetail;