// direct child of ShoppingCartDetail, render each product in shopping cart
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGifts} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";

const OrderDetail = (props) => {
    const {Products, Currency, Orders} = props.Data;
    const {order_number} = props;
    // find the order in the Store
    const currentOrder = Orders.find((order) => {
        return order.order_id = order_number;
    })
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
    
    // count quantity of a product in current Order
    const countProduct = (id) => {
        let count = 0;
        currentOrder.cart.forEach((product) => {
            if (product.id === id) {
                count += 1;
            }
        })
        return count;
    }
    /* Remove duplicate product in current Order based on ID*/
        const currentCart = [...currentOrder.cart];
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
        // create product array base on ID list, use this array to render order summary
        let splicedProductsList = [];
        removedDuplicateIdList.forEach((id) => {
            Products.forEach((product)=>{
                if (product.id === id){
                    splicedProductsList.push(product)
                }
            })
        })
    /* End remove duplicate product in current Order based on ID*/
    // Calculate total amount of current Order (re-use currentIdList)*/
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
                return "$ " + value;

            case "EUR":
                return "€ " + value;

            case "GBP":
                return "£ " + value;

            default:
                return "$ " + value;
        }
    }
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="row order-detail">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h4>Your order detail: <strong>{order_number}</strong></h4>
                    </div>
                </div>
                {/* container or product detail and shipping address */}
                <div className="row detail-wrap">
                    {/* order summary on the left */}
                    <div className="col-6 order-summary">
                        <h5>Order summary</h5>
                        <table>
                            <tbody>
                                {/* render each product is a row of table */}
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
                                {/* shipping fee */}
                                <tr className="product">
                                    <td className="name">Shipping Fee</td>
                                    <td className="quantity">1</td>
                                    <td className="price">{showMoneyTotal(Currency.currency, currentOrder.shipping_fee)}</td>
                                    <td className="amount">{showMoneyTotal(Currency.currency, currentOrder.shipping_fee)}</td>
                                </tr>
                                {/* total amount of product and shipping fee */}
                                <tr className="total-amount">
                                    <td className="title" colSpan={3}>Total</td>
                                    <td className="money">{showMoneyTotal(Currency.currency, totalAmount + currentOrder.shipping_fee)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* shipping address on the right */}
                    <div className="col-6 order-contact">
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
                {/* button continue shopping */}
                <div className="navigate">
                    <div className="wrap">
                        <NavLink
                            to = "/all-collection"
                        >
                            <FontAwesomeIcon icon = {faGifts} className="icon"/>
                            Continue Shopping
                        </NavLink>
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
