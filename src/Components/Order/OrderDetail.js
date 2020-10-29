// direct child of ShoppingCartDetail, render each product in shopping cart
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import urlSlug from "url-slug";

const OrderDetail = (props) => {
    const {Products, Cart, Currency, Country, Orders} = props.Data;
    const {order_number} = props;
    // find the order in the Store
    const currentOrder = Orders.find((order) => {
        return order.order_id = order_number;
    })
    console.log(order_number, currentOrder);
    // find the country name
    const countryName = (code) => {
        switch (code) {
            case "UK":
                return "United Kingdom"
            case "US":
                return "United State"
            case "FR":
                return "France"
            default:
                break;
        }
    }
    return (
        <div className="row order-detail">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Your order detail: <strong>{order_number}</strong></h4>
                    </div>
                </div>
                <div className="row order-summary">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h5>Order summary</h5>
                                {/* <div className="content">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-contact">
                    <div className="col">
                        <h5>Shipping address</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="item">Name</td>
                                    <td className="value">{currentOrder.shipping.first_name} {currentOrder.shipping.last_name}</td>
                                </tr>
                                <tr>
                                    <td className="item">Phone</td>
                                    <td className="value">{currentOrder.shipping.phone}</td>
                                </tr>
                                <tr>
                                    <td className="item">City</td>
                                    <td className="value">{currentOrder.shipping.city}, {countryName(currentOrder.shipping.country)}</td>
                                </tr>
                                <tr>
                                    <td className="item">Street</td>
                                    <td className="value">{currentOrder.shipping.street}, {currentOrder.shipping.more}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(OrderDetail)
