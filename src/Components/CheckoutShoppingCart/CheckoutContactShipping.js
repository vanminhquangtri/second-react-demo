import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll, faLock} from "@fortawesome/free-solid-svg-icons";

const CheckoutContactShipping = (props) => {
    const [state, setState] = useState({
        form_status: "contact"
    })
    return (
        <div className="contact-shipping">
            <form>
                <label className="form-field">Shipping Address</label>
                <select name="country" className="field">
                    <option>Please Choose Your Country</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>France</option>
                </select>
                <select name="country" className="field">
                    <option>Please Choose Your City</option>
                    <option>London</option>
                    <option>Manchester</option>
                    <option>Liverpool</option>
                </select>
                <input className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc"/>
                <input className="field" name="more" type="text" placeholder="More detail such as District, Ward etc"/>
                <input className="field" name="phone" type="tel" placeholder="Your phone number"/>
                <input className="field" name="email" type="email" placeholder="Email address"/>
            </form>
            <div className="navi">
                <div class="container">
                    <div class="row">
                    <div className="col-6">
                        <div className="wrap pre">
                            <NavLink
                                to = "/shopping-cart"
                                exact = {true}
                            >
                                <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                                Return to Shopping Cart
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="wrap next">
                            <span>Continue to Payment Stage</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutContactShipping;