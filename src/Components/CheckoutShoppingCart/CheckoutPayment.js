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
                <input required className="field" name="first-name" type="text" placeholder="Card Owner"/>
                <label className="label">Card number (maximum 16 digits)</label>
                <input ref={register({required: true, maxLength: 16, minLength: 16})} className="field" name="card_number" type="number" placeholder="Card Number" value = {state.card_number} onChange = {(ev)=>updateCardNumber(ev)}/>
                {errors.card_number && "Sorry card number should have 16 digits"}
                <label className="label">Card expiration</label>
                <input ref={register({required: true, maxLength: 2, minLength: 2})} className="field" name="month" type="number" placeholder="Expired Month"/>                        
                {errors.month && "Sorry expired month should have 2 digits"}
                <input ref={register({ required: true, maxLength: 4, minLength: 4})} className="field" name="year" type="number" placeholder="Expired Year"/>
                {errors.year && "Sorry expired year should have 4 digits"}
                <label className="label">CVC code</label>
                <input ref={register({required: true, maxLength: 3, minLength: 3})} className="field" name="pass" type="password" placeholder="Card's CVC code"/>                        
                {errors.pass && "Sorry CVC code should have 3 digits"}
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
