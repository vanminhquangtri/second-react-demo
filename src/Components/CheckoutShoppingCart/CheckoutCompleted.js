// direct child of CheckoutShoppingCart
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGifts, faSearch} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
const CheckoutCompleted = (props) => {
    const {order_id} = props;
    return (
        <div className="check-out-form completed">
            <div className="congrat">
                <h3>Congratulation, you had successful purchase !</h3>
            </div>
            <div className="order-number">
                <h5>You order number is: </h5>
                <h5 className="number"> {order_id} </h5>
                <h5>You will need this number to review your order detail</h5>
            </div>
            <div className="navigate">
                <div className="col-6">
                    <NavLink
                        to = "/order"
                    >
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        Review Your Order
                    </NavLink>
                </div>
                <div className="col-6">
                    <NavLink
                        to = "/"
                    >
                        <FontAwesomeIcon icon={faGifts} className="icon"/>
                        Continue Shopping
                    </NavLink>
                </div>
            </div>
            </div>
    );
};
export default CheckoutCompleted
