// direct child of CheckoutShoppingCart
import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGifts, faSearch} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
const CheckoutCompleted = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const {order_id} = props;
    return (
        // use library https://animate.style
        <div className="check-out-form completed animate__animated animate__fadeInBottomRight">
            <div className="congrat">
                <h3>Congratulation, you had successful purchase !</h3>
            </div>
            <div className="order-number">
                <h5>You order number is: </h5>
                <h5 className="number"> {order_id} </h5>
                <h5>You will need this number to review your order detail</h5>
            </div>
            {/* container of button Review Order or Continue Shopping */}
            <div className="navigate">
                <div className="col-6 review">
                    <NavLink
                        to = "/order"
                    >
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        Review Your Order
                    </NavLink>
                </div>
                <div className="col-6 continue">
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
