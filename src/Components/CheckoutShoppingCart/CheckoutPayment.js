// direct child of CheckoutShoppingCart
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll} from "@fortawesome/free-solid-svg-icons";
const CheckoutPayment = (props) => {
    const {changeFormStt, dispatchOrder} = props;
    return (
        <div className="check-out-form payment">
            <label className="form-field">Payment</label>
            <div className="payment-card">
                <img
                    src = {require('../../Assets/images/section-checkout/payment.webp')}
                    alt="payment-card"
                />
            </div>
            <form 
                onSubmit = {(ev)=>{changeFormStt(ev, "completed"); dispatchOrder()}}
                id="payment-form"
            >
                <label className="label">Type of payment</label>
                <select name="card-type" className="field">
                    <option value="">Please choose type of payment</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Visa">Visa</option>
                    <option value="Paypal">Paypal (Currently under maintenance)</option>
                    <option value="M-Pesa">M-Pesa (Currently under maintenance)</option>
                    <option value="Airtel">Airtel (Currently under maintenance)</option>
                </select>
                <label className="label">Card owner</label>
                <input className="field" name="first-name" type="text" placeholder="Card Owner"/>
                <label className="label">Card number</label>
                <input className="field" name="card-number" type="number" placeholder="Card Number"/>
                <label className="label">Card expiration</label>
                <input className="field" name="month" type="number" placeholder="Expired Month"/>                        
                <input className="field" name="year" type="number" placeholder="Expired Year"/>
                <label className="label">CVC code</label>
                <input className="field" name="pass" type="password" placeholder="Card's CVC code"/>                        
            </form>
            <div className="navigate">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="wrap pre">
                                <div className="wrap next"
                                    onClick = {(ev)=>{changeFormStt(ev, "billing")}}
                                >
                                    <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                                    Return to Shipping Address
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
