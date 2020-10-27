import React, {useState} from 'react';
import CheckoutContactShipping from './CheckoutContactShipping';
import {connect} from "react-redux";

const countryData = [
    // shipping fee default USD
    {
        code: "UK",
        name: "UNITED KINGDOM",
        regions : [
            {
                name: "London",
                fee: 30,
            },
            {
                name: "Manchester",
                fee: 40,
            },
            {
                name: "Liverpool",
                fee: 50
            }
        ]
    },
    {
        code: "US",
        name: "UNITED STATES",
        regions : [
            {
                name: "Las Vegas",
                fee: 35,
            },
            {
                name: "Los Angeles",
                fee: 45,
            },
            {
                name: "New York",
                fee: 55
            }
        ]
    },
    {
        code: "FR",
        name: "FRANCE",
        regions : [
            {
                name: "Paris",
                fee: 32,
            },
            {
                name: "Reims",
                fee: 42,
            },
            {
                name: "Lyon",
                fee: 52
            }
        ]
    }
]

const CheckoutShoppingCart = (props) => {
    const {Cart, Currency} = props.Data;
    const [state, setState] = useState({
        shipping_fee: 0
    })
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, quantity, item) => {
        switch (currency) {
            case "USD":
                return "$ " + formatNumber((item.price*quantity).toFixed(2))

            case "EUR":
                return "€ " + formatNumber((item.price*quantity * 0.84).toFixed(2))

            case "GBP":
                return "£ " + formatNumber((item.price*quantity * 0.76).toFixed(2))

            default:
                return "$ " + formatNumber((item.price*quantity).toFixed(2))
        }
    }
    // fortmat money (currency and operator and decimal)
    const showMoneyTotal = (currency, amount) => {
        switch (currency) {
            case "USD":
                return "$ " + formatNumber((amount).toFixed(2))

            case "EUR":
                return "€ " + formatNumber((amount * 0.84).toFixed(2))

            case "GBP":
                return "£ " + formatNumber((amount * 0.76).toFixed(2))

            default:
                return "$ " + formatNumber((amount).toFixed(2))
        }
    }
    const changeShippingFee = (ev) => {
        ev.preventDefault();
        let value = ev.target.value;
        if (value === "") {value = 0};
        setState((prevState) => {
            return {
                ...prevState,
                shipping_fee: parseFloat(value)
            }
        })
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
                            <CheckoutContactShipping
                                Countries = {countryData}
                                changeShippingFee = {changeShippingFee}
                            />
                        </div>
                    </div>
                    <div className="col-5 summary">
                        <div className="title">
                            <h5>Your Order Summary</h5>
                        </div>
                        <div className="content">
                            <table>
                                <tbody>
                                    <tr className="product">
                                        <td className="name">Latest Beauty Women Clothing White</td>
                                        <td className="quantity">10</td>
                                        <td className="price">$ 200.00</td>
                                        <td className="amount">$ 2000.00</td>
                                    </tr>
                                    <tr className="product">
                                        <td className="name">Shipping Fee</td>
                                        <td className="quantity">1</td>
                                        <td className="price">$ 200.00</td>
                                        <td className="amount">{showMoneyTotal(Currency.currency,state.shipping_fee)}</td>
                                    </tr>
                                        <tr className="total-amount">
                                        <td className="title" colSpan={3}>Total</td>
                                        <td className="money">$ 2000.00</td>
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