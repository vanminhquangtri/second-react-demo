// direct child of RouterURL, appear when click "View Cart" while cart is not empty
import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReplyAll, faLock} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import ShoppingCartProduct from './ShoppingCartProduct';

const ShoppingCartDetail = (props) => {
    const {Cart, Products, Currency} = props.Data;
    const {dispatch} = props;
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
    },[])
    return (
        <section className="shopping-cart-detail">
            <div className="container">
                <div className="row title">
                    {/* big title at top */}
                    <div className="col">
                        <h4>Your Shopping Cart</h4>
                    </div>
                    {/* button continue shopping on the right side */}
                    <div className="col-auto">
                        <NavLink
                            to = "/all-collection"
                            exact = {true}
                        >
                            <FontAwesomeIcon icon = {faReplyAll} className="icon"/>
                            Continue Shopping
                        </NavLink>
                    </div>
                </div>
                {/* container of order summary on the left and total amount on the right */}
                <div className="row shopping-cart-content">
                    {/* order summary on the left */}
                    <div className="col-6 order">
                        <div className="content">
                            <div className="title">Order Summary</div>
                            <div className="info">
                                <div className="container">
                                    {/* render information of each product in shopping cart */}
                                    {
                                        splicedProductsList.map((product, index) => {
                                            return (
                                                <ShoppingCartProduct Product = {product} key = {product.id}></ShoppingCartProduct>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* total amount on the right */}
                    <div className="col-3 total-amount">
                        <div className="content">
                            <div className="title">Your Cart Total</div>
                            <div className="info">
                                {/* total amount */}
                                <div className="money">
                                    <span> {showMoneyTotal(Currency.currency, totalAmount)} </span>
                                </div>
                                {/* button check out */}
                                <div className="check-out">
                                    <div className="wrap">
                                        <FontAwesomeIcon icon = {faLock} className = "icon"/>
                                        <NavLink
                                            to="/check-out"
                                            exact={true}
                                            onClick = {()=>{dispatch({type: "BUY_WHOLE_CART"})}}
                                        >
                                            Proceed To Checkout
                                        </NavLink>
                                    </div>
                                </div>
                                {/* payment cart */}
                                <div className="payment-card">
                                    <img
                                        alt="payment-card"
                                        src={require("../../Assets/images/section-shopping-cart-detail/payment.webp").default}
                                    />
                                </div>
                            </div>
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
export default connect(mapStateToProps)(ShoppingCartDetail)
