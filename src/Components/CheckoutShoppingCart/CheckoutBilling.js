// direct child of CheckoutShoppingCart
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
const CheckoutBilling = (props) => {
    const [state, setState] = useState({
        country: "",
        reuse_contact_address: true
    })
    const {Countries, changeFormStt, updateOrderId, updateOrderInfo, setBillingSameAsShipping, orderInfo, billing_same_shipping, changeStateBilling_same_shipping} = props;
    const currentCountry = Countries.find((ct) => {
        return ct.code === state.country
    })
    // use react-hook-form
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = () => {
        changeFormStt("payment");
        updateOrderId();
        setBillingSameAsShippingOnSubmit(billing_same_shipping)
    };
    // defind which checkbox to be checked on page load ("same as billing" or "use different address")
    const defaultChecked = (condition) => {
        if (condition === true) {
            return true
        } else {return false}
    }
    // update country state when choose country
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
    // update reuse_contact_address state when press "same as billing" or "use different address"
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
    // set billing address same as shipping when choose "same as shipping" then press continue to payment
    const setBillingSameAsShippingOnSubmit = (condition) => {
        if (condition === true) {
            setBillingSameAsShipping(true)
        }
    }
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="check-out-form billing">
            {/* name of form: Billing Address */}
            <label className="form-field">Billing Address</label>
            {/* determine whether billing address is same with shipping address at the previous stage */}
            <div className="choose">
                <input type="radio" id="yes" name="re-use" value="same" defaultChecked = {defaultChecked(billing_same_shipping)} onInput = {(ev)=>{changeReuseContactAddress(ev); setBillingSameAsShipping(true); changeStateBilling_same_shipping(ev)}}/> &nbsp;
                <label htmlFor="yes">Same as shipping address</label><br />
                <input type="radio" id="no" name="re-use" value="dif" defaultChecked = {defaultChecked(!billing_same_shipping)} onInput = {(ev)=>{changeReuseContactAddress(ev); setBillingSameAsShipping(false); changeStateBilling_same_shipping(ev)}}/> &nbsp;
                <label htmlFor="no">Use different address</label><br />
            </div>
            <form 
                onSubmit = {handleSubmit(onSubmit)}
                id="billing-form"
            >
            {
                (billing_same_shipping === false) && (
                    <>
                        <input ref={register({pattern: /^[a-zA-Z ]*$/})} required className="field" name="first_name" type="text" placeholder="Your first name" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "first_name")}} defaultValue = {orderInfo.billing.first_name}/>
                        <span className="errors">{errors.first_name && "First name should be alphabet letters only"}</span>
                        <input ref={register({pattern: /^[a-zA-Z ]*$/})} required className="field" name="last_name" type="text" placeholder="Your last name" onChange = {(ev)=>{updateOrderInfo(ev, "billing", "last_name")}} defaultValue = {orderInfo.billing.last_name}/>
                        <span className="errors">{errors.last_name && "Last name should be alphabet letters only"}</span>
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
                        {/* Button Return */}
                        <div className="col-6">
                            <div className="wrap pre">
                                <div className="wrap next"
                                    onClick = {()=>{changeFormStt("contact-shipping")}}
                                >
                                    <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                                    Return to Shipping Address
                                </div>
                            </div>
                        </div>
                        {/* Button Continue */}
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
