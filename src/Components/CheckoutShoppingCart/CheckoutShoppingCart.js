// direct child of RouterURL
import React, {useState, useEffect} from 'react';
import CheckoutContactShipping from './CheckoutContactShipping';
import {connect} from "react-redux";
import CheckoutBilling from './CheckoutBilling';
import CheckoutPayment from './CheckoutPayment';
import CheckoutCompleted from './CheckoutCompleted';
const CheckoutShoppingCart = (props) => {
    const {Products, Cart, Currency, Country} = props.Data;
    const {dispatch} = props;
    const [state, setState] = useState({
        form_stt: "contact-shipping",
        order_info: {
            order_id: "",
            shipping: {
                first_name: "",
                last_name: "",
                country: "",
                city: "",
                street: "",
                more: "",
                phone: "",
                email: "",
            },
            billing: {
                first_name: "",
                last_name: "",
                country: "",
                city: "",
                street: "",
                more: ""
            },
            cart: Cart,
            shipping_fee: 0,
        },
        billing_same_shipping: true
    })
    // update info of order when fill each field of form (input, select)
    const updateOrderInfo = (ev, fieldName, propertyName) => { // not apply for order ID
        ev.preventDefault();
        const value = ev.target.value;
        var currentOrderInfo = {...state.order_info};
        currentOrderInfo[fieldName][propertyName] = value;
        setState((prevState) => {
            return {
                ...prevState,
                order_info: currentOrderInfo
            }
        })
    }
    // set billing information to be same with shipping or not when choose "same as shipping" or "use different address"
    const setBillingSameAsShipping = (condition) => {
        if (condition === true){
            const {first_name, last_name, country, city, street, more} = state.order_info.shipping;
            setState((prevState) => {
                return {
                    ...prevState,
                    order_info : {
                        ...prevState.order_info,
                        billing : {
                            ...prevState.order_info.billing,
                            first_name: first_name,
                            last_name: last_name,
                            country: country,
                            city: city,
                            street: street,
                            more: more
                        }
                    }
                }
            })
        } else {
            const {first_name, last_name, country, city, street, more} = state.order_info.billing;
            setState((prevState) => {
                return {
                    ...prevState,
                    order_info : {
                        ...prevState.order_info,
                        billing : {
                            ...prevState.order_info.billing,
                            first_name: first_name,
                            last_name: last_name,
                            country: country,
                            city: city,
                            street: street,
                            more: more
                        }
                    }
                }
            })
        }
    }
    // change state of billing_same_shipping when choose "same as shipping" or "use different address"
    const changeStateBilling_same_shipping = (ev) => {
        ev.preventDefault();
        const value = ev.target.value;
        if (value === "same") {
            setState((prevState) => {
                return {
                    ...prevState,
                    billing_same_shipping: true
                }
            })
        } else {
            setState((prevState) => {
                return {
                    ...prevState,
                    billing_same_shipping: false
                }
            })
        }
    }
    // add order to store when press "complete payment"
    const dispatchOrder = () => {
        dispatch({type: "ADD_ORDER", order: state.order_info})
    }
    // update state shipping fee when choose city of form shipping
    const changeShippingFee = (ev, countryCode) => {
        ev.preventDefault();
        let value = ev.target.value;
        var fee = 0;
        // find the current chosen country
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
        const currentState = {...state};
        currentState.order_info.shipping_fee = fee;
        setState(() => {
            return currentState
        })
    }
    // update state of form (contact-shipping, billing, payment or completed) when press "return to ..." or "continue to ..."
    const changeFormStt = (ev, value) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                form_stt: value
            }
        })
    }    
    // generate random number 
    const n1 = Math.round(Math.random() * 9);
    const n2 = Math.round(Math.random() * 9);
    const n3 = Math.round(Math.random() * 9);
    const n4 = Math.round(Math.random() * 9);
    const n5 = Math.round(Math.random() * 9);
    const n6 = Math.round(Math.random() * 9);
    const n7 = Math.round(Math.random() * 9);
    const newId = `ORDER-${n1}${n2}${n3}${n4}${n5}${n6}${n7}`;
    // update state order_id when press "continue to payment"
    const updateOrderId = (ev) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                order_info: {
                    ...state.order_info,
                    order_id: newId
                }
            }
        })
    }
    // count quantity of a product in Shopping Cart to show to order summary
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
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="check-out">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4 onClick = {()=>{dispatch({type: "ADD_ORDER", order: [1, 2, 3]})}}>Welcome to Payment Portal</h4>
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
                                        updateOrderInfo = {updateOrderInfo}
                                        orderInfo = {state.order_info}
                                    />
                                )) ||
                                ((state.form_stt === "billing") && (
                                    <CheckoutBilling
                                        Countries = {Country}
                                        changeFormStt = {changeFormStt}
                                        updateOrderId = {updateOrderId}
                                        updateOrderInfo = {updateOrderInfo}
                                        setBillingSameAsShipping = {setBillingSameAsShipping}
                                        orderInfo = {state.order_info}
                                        billing_same_shipping = {state.billing_same_shipping}
                                        changeStateBilling_same_shipping = {changeStateBilling_same_shipping}
                                    />
                                )) ||
                                ((state.form_stt === "payment") && (
                                    <CheckoutPayment
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                        dispatchOrder = {dispatchOrder}
                                    />
                                )) ||
                                ((state.form_stt === "completed") && (
                                    <CheckoutCompleted
                                        Countries = {Country}
                                        changeShippingFee = {changeShippingFee}
                                        changeFormStt = {changeFormStt}
                                        order_id = {state.order_info.order_id}
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
                                        <td className="price">{showMoneyTotal(Currency.currency, state.order_info.shipping_fee)}</td>
                                        <td className="amount">{showMoneyTotal(Currency.currency, state.order_info.shipping_fee)}</td>
                                    </tr>
                                        <tr className="total-amount">
                                        <td className="title" colSpan={3}>Total</td>
                                        <td className="money">{showMoneyTotal(Currency.currency, state.order_info.shipping_fee + totalAmount)}</td>
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