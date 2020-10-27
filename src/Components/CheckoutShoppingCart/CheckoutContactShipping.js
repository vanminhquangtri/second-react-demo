// direct child of CheckoutShoppingCart
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
const CheckoutContactShipping = (props) => {
    const [state, setState] = useState({
        country: ""
    })
    const {Countries, changeShippingFee} = props;
    const currentCountry = Countries.find((ct) => {
        return ct.code === state.country
    })
    const changeCountry = (ev) => {
        ev.preventDefault();
        const value = ev.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                country: value
            }
        })
    }
    return (
        <div className="contact-shipping">
            <form>
                <label className="form-field">Shipping Address</label>
                <select name="country" className="field" onChange = {(ev)=> {changeCountry(ev)}}>
                    <option value="">Please Choose Your Country</option>
                    <option value="UK">UNITED KINGDOM</option>
                    <option value="US">UNITED STATES</option>
                    <option value="FR">FRANCE</option>
                </select>
                <select name="country" className="field" onChange = {(ev)=>{changeShippingFee(ev)}}>
                    {/* render city name base on country name */}
                    <option value="">Please Choose Your City</option>
                    {
                        (currentCountry !== undefined) && currentCountry.regions.map((region) => {
                            return (
                                <option value = {region.fee} key = {region.name}>{region.name}</option>
                            )
                        })
                    }
                </select>
                <input className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc"/>
                <input className="field" name="more" type="text" placeholder="More detail such as District, Ward etc"/>
                <input className="field" name="phone" type="tel" placeholder="Your phone number"/>
                <input className="field" name="email" type="email" placeholder="Email address"/>
                <div className="navigate">
                    <div className="container">
                        <div className="row">
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
                                    <input className="field" name="street" type="submit" value="Continue to Payment Stage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default CheckoutContactShipping
