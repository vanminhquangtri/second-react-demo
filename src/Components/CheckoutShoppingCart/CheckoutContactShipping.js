// direct child of CheckoutShoppingCart
import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
const CheckoutContactShipping = (props) => {
    const [state, setState] = useState({
        country: ""
    })
    const {Countries, changeShippingFee, changeFormStt, updateOrderInfo, orderInfo} = props;
    const {handleSubmit} = useForm();
    const onSubmit = () => {
        changeFormStt("billing")
    };
    // get the country that is chosen
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
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="check-out-form contact-shipping">
            <label className="form-field">Shipping Address</label>
            <form 
                onSubmit = {handleSubmit(onSubmit)}
                id="contact-shipping-form"
            >
                <input required className="field" name="first_name" type="text" placeholder="Your first name" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "first_name")}} defaultValue = {orderInfo.shipping.first_name}/>
                <input required className="field" name="last_name" type="text" placeholder="Your last name" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "last_name")}} defaultValue = {orderInfo.shipping.last_name}/>
                <select required name="country" className="field" onChange = {(ev)=> {changeCountry(ev); updateOrderInfo(ev, "shipping", "country")}} defaultValue = {orderInfo.shipping.country}>
                    <option value="">Please Choose Your Country</option>
                    <option value="UK">UNITED KINGDOM</option>
                    <option value="US">UNITED STATES</option>
                    <option value="FR">FRANCE</option>
                </select>
                <select required name="city" className="field" onChange = {(ev)=>{changeShippingFee(ev, state.country); updateOrderInfo(ev, "shipping", "city")}} defaultValue = {orderInfo.shipping.city}>
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
                <input required className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "street")}} defaultValue = {orderInfo.shipping.street}/>
                <input required className="field" name="more" type="text" placeholder="More detail such as District, Ward etc" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "more")}} defaultValue = {orderInfo.shipping.more}/>
                <input required className="field" name="phone" type="tel" placeholder="Your phone number" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "phone")}} defaultValue = {orderInfo.shipping.phone}/>
                <input required className="field" name="email" type="email" placeholder="Email address" onChange = {(ev)=>{updateOrderInfo(ev, "shipping", "email")}} defaultValue = {orderInfo.shipping.email}/>
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
