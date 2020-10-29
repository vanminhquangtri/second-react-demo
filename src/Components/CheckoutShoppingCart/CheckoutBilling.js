// direct child of CheckoutShoppingCart
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
const CheckoutBilling = (props) => {
    const [state, setState] = useState({
        country: "",
        reuse_contact_address: true
    })
    const {Countries, changeFormStt, updateOrderId, updateOrderInfo, setBillingSameAsShipping, orderInfo, billing_same_shipping, changeStateBilling_same_shipping} = props;
    const currentCountry = Countries.find((ct) => {
        return ct.code === state.country
    })
    // update country state
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
    // update reuse_contact_address state
    const changeReuseContactAddress = (ev) => {
        ev.preventDefault();
        const value = ev.target.value;
        if (value === "same") {
            setState((prevState) => {
                return {
                    ...prevState,
                    reuse_contact_address: true
                }
            })
        } else {
            setState((prevState) => {
                return {
                    ...prevState,
                    reuse_contact_address: false
                }
            })
        }
    }
    // defind which checkbox to be check on page load
    const defaultChecked = (condition) => {
        if (condition === true) {
            return true
        } else {return false}
    }
    // set billing same shipping on submit (dont fill any form of billing, just press continue to payment)
    const setBillingSameAsShippingOnSubmit = (condition) => {
        if (condition === true) {
            setBillingSameAsShipping(true)
        }
    }
    return (
        <div className="check-out-form billing">
            <label className="form-field">Billing Address</label>
            <div className="choose">
                <input type="radio" id="yes" name="re-use" value="same" defaultChecked = {defaultChecked(billing_same_shipping)} onInput = {(ev)=>{changeReuseContactAddress(ev); setBillingSameAsShipping(true); changeStateBilling_same_shipping(ev)}}/> &nbsp;
                <label htmlFor="yes">Same as shipping address</label><br />
                <input type="radio" id="no" name="re-use" value="dif" defaultChecked = {defaultChecked(!billing_same_shipping)} onInput = {(ev)=>{changeReuseContactAddress(ev); setBillingSameAsShipping(false); changeStateBilling_same_shipping(ev)}}/> &nbsp;
                <label htmlFor="no">Use different address</label><br />
            </div>
            <form 
                onSubmit = {(ev)=>{changeFormStt(ev, "payment"); updateOrderId(ev); setBillingSameAsShippingOnSubmit(billing_same_shipping)}}
                id="billing-form"
            >
            {
                (billing_same_shipping === false) && (
                    <>
                        <input required className="field" name="first-name" type="text" placeholder="Your first name" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "first_name")}} defaultValue = {orderInfo.billing.first_name}/>
                        <input required className="field" name="last-name" type="text" placeholder="Your last name" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "last_name")}} defaultValue = {orderInfo.billing.last_name}/>
                        <select required name="country" className="field" onChange = {(ev)=> {changeCountry(ev); updateOrderInfo(ev, "billing", "country")}} defaultValue = {orderInfo.billing.country}>
                            <option value="">Please Choose Your Country</option>
                            <option value="UK">UNITED KINGDOM</option>
                            <option value="US">UNITED STATES</option>
                            <option value="FR">FRANCE</option>
                        </select>
                        <select required name="city" className="field" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "city")}} defaultValue = {orderInfo.shipping.city}>
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
                        <input required className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "street")}} defaultValue = {orderInfo.billing.street}/>
                        <input required className="field" name="more" type="text" placeholder="More detail such as District, Ward etc" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "more")}} defaultValue = {orderInfo.billing.more}/>                        
                    </>
                )
            }
            </form>
            <div className="navigate">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="wrap pre">
                                <div className="wrap next"
                                    onClick = {(ev)=>{changeFormStt(ev, "contact-shipping")}}
                                >
                                    <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                                    Return to Shipping Address
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="wrap next">
                                <input form="billing-form" className="field" name="street" type="submit" value="Continue to Payment Stage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckoutBilling
