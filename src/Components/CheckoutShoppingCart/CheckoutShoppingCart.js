// direct child of RouterURL
import React, {useState} from 'react';
import CheckoutContactShipping from './CheckoutContactShipping';
import {connect} from "react-redux";
import CheckoutBilling from './CheckoutBilling';
import CheckoutPayment from './CheckoutPayment';
import CheckoutCompleted from './CheckoutCompleted';
const CheckoutShoppingCart = (props) => {
    const {Products, Cart, Currency, Country} = props.Data;
    const [state, setState] = useState({
        shipping_fee: 0,
        form_stt: "completed",
        order_id: ""
    })
    // update state shipping fee when choose city
    const changeShippingFee = (ev, countryCode) => {
        ev.preventDefault();
        let value = ev.target.value;
        var fee = 0;
        // find the current country
        const currentCountry = Country.find((country) => {
            return country.code === countryCode
        })
        // find city
        if (currentCountry !== undefined){
            currentCountry.regions.forEach((region)=>{
                if (region.name === value) {
                    fee = region.fee;
                }
                if (region.name === "") {
                    fee = 0;
                }
            })
        }   
        setState((prevState) => {
            return {
                ...prevState,
                shipping_fee: parseFloat(fee)
            }
        })
    }
    // update state of form (contact-shipping, billing, payment)
    const changeFormStt = (ev, value) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                form_stt: value
            }
        })
    }
    // update order_id (after click complete payment)
    const updateOrderId = (ev) => {
        ev.preventDefault();
        
    }
    // count quantity of a product in Shopping Cart
    const countProduct = (id) => {
        let count = 0;
        Cart.forEach((product) => {
            if (product.id === id) {
                count += 1;
            }
        })
        return count;
    }
    /* Remove duplicate product in Cart arr based on ID*/
        const currentCart = [...Cart];
        // get ID list of current Cart
        let currentIdList = [];
        currentCart.forEach((product) => {
            currentIdList.push(product.id);
        })
        // removed duplicated ID
        let removedDuplicateIdList = [];
        currentIdList.forEach((id) => {
            if (!removedDuplicateIdList.includes(id)){
                removedDuplicateIdList.push(id)
            }
        })
        // create product array base on ID list, use this array to render shopping cart
        let splicedProductsList = [];
        removedDuplicateIdList.forEach((id) => {
            Products.forEach((product)=>{
                if (product.id === id){
                    splicedProductsList.push(product)
                }
            })
        })
    /* End remove duplicate product in Cart arr based on ID*/
    // Calculate total amount of Shopping Cart (re-use currentIdList)*/
    var totalAmount = 0;
    currentIdList.forEach((id) => {
        Products.forEach((product)=>{
            if (product.id === id){
                totalAmount += product.price // (default is USD)
            }
        })
    })
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, quantity, item) => {
        const value = formatNumber((item.price * quantity * Currency.rate).toFixed(2));
        switch (currency) {
            case "USD":
                return "$ " + value;

            case "EUR":
                return "€ " + value;

            case "GBP":
                return "£ " + value;

            default:
                return "$ " + value;
        }
    }
    // fortmat money (currency and operator and decimal)
    const showMoneyTotal = (currency, amount) => {
        const value = formatNumber((amount * Currency.rate).toFixed(2));
        switch (currency) {
            case "USD":
                return "$ " + value

            case "EUR":
                return "€ " + value

            case "GBP":
                return "£ " + value

            default:
                return "$ " + value
        }
    }
    return (
        <section className="check-out">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Welcome to Payment Portal</h4>
                    </div>
                </div>
                <div className="row payment">
                    <div className="col-7 payment-process">
                        <div className="content">
                            {
                                ((state.form_stt === "contact-shipping") && (
                                    <CheckoutContactShipping
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                    />
                                )) ||
                                ((state.form_stt === "billing") && (
                                    <CheckoutBilling
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                    />
                                )) ||
                                ((state.form_stt === "payment") && (
                                    <CheckoutPayment
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                    />
                                )) ||
                                ((state.form_stt === "completed") && (
                                    <CheckoutCompleted
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-5 summary">
                        <div className="title">
                            <h5>Your Order Summary</h5>
                        </div>
                        <div className="content">
                            <table>
                                <tbody>
                                    {
                                        splicedProductsList.map((product) => {
                                            return (
                                                <tr className="product" key = {product.id}>
                                                    <td className="name">{product.name}</td>
                                                    <td className="quantity">{countProduct(product.id)}</td>
                                                    <td className="price">{showMoney(Currency.currency, 1, product)}</td>
                                                    <td className="amount">{showMoneyTotal(Currency.currency, product.price * countProduct(product.id))}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="product">
                                        <td className="name">Shipping Fee</td>
                                        <td className="quantity">{state.shipping_fee === 0 ? 0 : 1}</td>
                                        <td className="price">{showMoneyTotal(Currency.currency, state.shipping_fee)}</td>
                                        <td className="amount">{showMoneyTotal(Currency.currency, state.shipping_fee)}</td>
                                    </tr>
                                        <tr className="total-amount">
                                        <td className="title" colSpan={3}>Total</td>
                                        <td className="money">{showMoneyTotal(Currency.currency, state.shipping_fee + totalAmount)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(CheckoutShoppingCart)