// direct child of CheckoutShoppingCart
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
const CheckoutBilling = (props) => {
    const [state, setState] = useState({
        country: "",
        reuse_contact_address: true
    })
    const {Countries, changeFormStt, updateOrderId} = props;
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
    return (
        <div className="check-out-form billing">
            <label className="form-field">Billing Address</label>
            <div className="choose">
                <input type="radio" id="yes" name="re-use" value="same" defaultChecked onInput = {(ev)=>{changeReuseContactAddress(ev)}}/> &nbsp;
                <label htmlFor="yes">Same as shipping address</label><br />
                <input type="radio" id="no" name="re-use" value="dif" onInput = {(ev)=>{changeReuseContactAddress(ev)}}/> &nbsp;
                <label htmlFor="no">Use different address</label><br />
            </div>
            <form 
                onSubmit = {(ev)=>{changeFormStt(ev, "payment"); updateOrderId(ev)}}
                id="billing-form"
            >
            {
                !state.reuse_contact_address && (
                    <>
                        <input className="field" name="first-name" type="text" placeholder="Your first name"/>
                        <input className="field" name="last-name" type="text" placeholder="Your last name"/>
                        <select name="country" className="field" onChange = {(ev)=> {changeCountry(ev)}}>
                            <option value="">Please Choose Your Country</option>
                            <option value="UK">UNITED KINGDOM</option>
                            <option value="US">UNITED STATES</option>
                            <option value="FR">FRANCE</option>
                        </select>
                        <select name="city" className="field">
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
                        <input className="field" name="street" type="text" placeholder="Street name: No. 20, Saint Maxim Street etc"/>
                        <input className="field" name="more" type="text" placeholder="More detail such as District, Ward etc"/>                        
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
