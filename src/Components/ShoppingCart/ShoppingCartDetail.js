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
                            <div className="info">Detail Info</div>
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