// direct child of CheckoutShoppingCart
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
const CheckoutContactShipping = (props) => {
    const [state, setState] = useState({
        country: ""
    })
    const {Countries, changeShippingFee, changeFormStt, updateOrderInfo} = props;
    const currentCountry = Countries.find((ct) => {
        return ct.code === state.country
    })
    const changeCountry = (ev) => {
        const value = ev.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                country: value
            }
        })
    }
    return (
        <div className="check-out-form contact-shipping">
            <label className="form-field">Shipping Address</label>
            <form 
                onSubmit = {(ev)=>{changeFormStt(ev, "billing")}}
                id="contact-shipping-form"
            >
                <input className="field" name="first-name" type="text" placeholder="Your first name" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "first_name")}}/>
                <input className="field" name="last-name" type="text" placeholder="Your last name" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "last_name")}}/>
                <select name="country" className="field" onChange = {(ev)=> {changeCountry(ev); updateOrderInfo(ev, "shipping", "country")}}>
                    <option value="">Please Choose Your Country</option>
                    <option value="UK">UNITED KINGDOM</option>
                    <option value="US">UNITED STATES</option>
                    <option value="FR">FRANCE</option>
                </select>
                <select name="city" className="field" onChange = {(ev)=>{changeShippingFee(ev, state.country); updateOrderInfo(ev, "shipping", "city")}}>
                    {/* render city name base on country name */}
                    <option value="">Please Choose Your City</option>
                    {
                        (currentCountry !== undefined) && currentCountry.regions.map((region) => {
                            return (
                                <option value = {region.name} key = {region.name}>{region.name}</option>
                            )
                        })
                    }
                </select>
                <input className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "street")}}/>
                <input className="field" name="more" type="text" placeholder="More detail such as District, Ward etc" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "more")}}/>
                <input className="field" name="phone" type="tel" placeholder="Your phone number" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "phone")}}/>
                <input className="field" name="email" type="email" placeholder="Email address" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "email")}}/>
            </form>
            <div className="navigate">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="wrap pre" >
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
                                <input form="contact-shipping-form" className="field" name="street" type="submit" value="Continue to Billing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckoutContactShipping