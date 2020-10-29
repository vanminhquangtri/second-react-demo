// direct child of ShoppingCartDetail, render each product in shopping cart
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import urlSlug from "url-slug";

const ShoppingCartProduct = (props) => {
    const {Cart, Currency} = props.Data;
    const {Product, dispatch} = props;
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
    const [state, setState] = useState({
        update_quantity: countProduct(Product.id),
        name: Product.name
    })
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // fortmat money (currency and operator and decimal)
    const showMoney = (currency, quantity, item) => {
        const value = formatNumber((item.price*quantity * Currency.rate).toFixed(2));
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
    // increase added_quantity when click plus button
    const increaseAddedAmount = () => {
        setState((prevState) => {
            return {
                ...prevState,
                update_quantity: prevState.update_quantity + 1
            }
        })
    }
    // decrease added_quantity when click substract button
    const decreaseAddedAmount = () => {
        if (state.update_quantity > 0) {
            setState((prevState) => {
                return {
                    ...prevState,
                    update_quantity: prevState.update_quantity - 1
                }
            })
        }
    } 
    return (
        <div className="row product-row">
            <div className="col-2 img">
                <img 
                    alt="product"
                    src = {Product.main__image.default}
                />
            </div>
            <div className="col-10 product-detail">
                <div className="row name">
                    <div className="col">
                        <NavLink
                            to = {`/product/${urlSlug(Product.name)}`}
                            exact = {true}
                        >
                            {Product.name}
                        </NavLink>
                    </div>
                </div>
                <div className="row price">
                    <div className="col">{showMoney(Currency.currency, 1, Product)}</div>
                </div>
                <div className="row quantity-title">
                    <div className="col">
                        Quantity
                    </div>
                </div>
                <div className="row quantity-row">
                    <div className="col-3 quantity">
                        <div className="wrap">
                            <span 
                                className="decrease"
                                onClick = {()=>{decreaseAddedAmount()}}
                            >-</span>
                            <span className='count'>
                                {state.update_quantity}
                            </span>
                            <span 
                                className="increase"
                                onClick = {()=>{increaseAddedAmount()}}
                            >+</span>
                        </div>
                    </div>
                    <div className="col-3 update-quantity">
                        <div 
                            className="wrap" 
                            onClick = {()=>dispatch({type: "UPDATE", id: Product.id, quantity: state.update_quantity})}
                        >
                            <FontAwesomeIcon icon = {faPen} className="icon"/>
                            Update
                        </div>
                    </div>
                    <div className="col-3 remove-product">
                        <div 
                            className="wrap"
                            onClick = {()=>{dispatch({type: "REMOVE", id: Product.id})}}
                        >
                            <FontAwesomeIcon icon = {faTimesCircle} className="icon"/>
                            Remove
                        </div>
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
export default connect(mapStateToProps)(ShoppingCartProduct)
