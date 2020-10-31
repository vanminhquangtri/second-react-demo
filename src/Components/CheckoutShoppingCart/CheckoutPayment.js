// direct child of CheckoutShoppingCart
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
const CheckoutPayment = (props) => {
    const {changeFormStt, dispatchOrder,changeFormSttWithEv} = props;
    const [state, setState] = useState({
        card_number: "",
    })
    // limit card number 16 digits, can't fill more
    const updateCardNumber = (ev) => {
        const value = ev.target.value;
        if (value.length <= 16){
            setState((prevState) => {
                return {
                    ...prevState,
                    card_number: value
                }
            })
        }
    }
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = () => {
        changeFormStt("completed"); dispatchOrder()
    };
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="check-out-form payment">
            <label className="form-field">Payment</label>
            <div className="payment-card">
                <img
                    src = {require('../../Assets/images/section-checkout/payment.webp').default}
                    alt="payment-card"
                />
            </div>
            <form 
                onSubmit = {handleSubmit(onSubmit)}
                id="payment-form"
            >
                <label className="label">Type of payment</label>
                <select required name="card-type" className="field">
                    <option value="">Please choose type of payment</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Visa">Visa</option>
                    <option disabled value="Paypal">Paypal (Currently under maintenance)</option>
                    <option disabled value="M-Pesa">M-Pesa (Currently under maintenance)</option>
                    <option disabled value="Airtel">Airtel (Currently under maintenance)</option>
                </select>
                <label className="label">Card owner</label>
                <input ref={register({pattern: /^[a-zA-Z ]*$/})} required className="field" name="card_owner" type="text" placeholder="Card Owner"/>
                <span className="errors">{errors.card_owner && "First name should be alphabet letters only"}</span>
                <label className="label">Card number (maximum 16 digits)</label>
                <input ref={register({maxLength: 16, minLength: 16})} required className="field" name="card_number" type="number" placeholder="Card Number" value = {state.card_number} onChange = {(ev)=>updateCardNumber(ev)}/>
                <span className="errors">{errors.card_number && "Card number should have 16 digits"}</span>
                <label className="label">Card expiration</label>
                <input ref={register({maxLength: 2, minLength: 2})} required className="field" name="month" type="number" placeholder="Expired Month"/>                        
                <span className="errors">{errors.month && "Expired month should have 2 digits"}</span>
                <input ref={register({maxLength: 4, minLength: 4})} required className="field" name="year" type="number" placeholder="Expired Year"/>
                <span className="errors">{errors.year && "Expired year should have 4 digits"}</span>
                <label className="label">CVC code</label>
                <input ref={register({maxLength: 3, minLength: 3})} required className="field" name="pass" type="password" placeholder="Card's CVC code"/>                        
                <span className="errors">{errors.pass && "CVC code should have 3 digits"}</span>
            </form>
            <div className="navigate">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="wrap pre">
                                <div className="wrap next"
                                    onClick = {(ev)=>changeFormSttWithEv(ev, "billing")}
                                >
                                    <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                                    Return to Billing Address
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="wrap next">
                                <input form="payment-form" className="field" name="street" type="submit" value="Complete Payment"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckoutPayment
