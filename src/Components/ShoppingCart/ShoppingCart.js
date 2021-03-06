// direct child of top-nav
import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import urlSlug from "url-slug";
// start component
class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_top_up: false
        }
    };
    toggleCartTopUp(){
        this.setState((state) => {
            return {
                ...state,
                cart_top_up: !state.cart_top_up
            }
        })
    };    
    // format thounds seperator
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };
    // fortmat money (currency and operator and decimal)
    showMoney(currency, quantity, item) {
        const value = this.formatNumber((item.price * quantity * this.props.Data.Currency.rate).toFixed(2));
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
    };
    // count quantity of a product in Shopping Cart
    countProduct(id) {
        let count = 0;
        this.props.Data.Cart.forEach((product) => {
            if (product.id === id) {
                count += 1;
            }
        })
        return count;
    };
    // fortmat money (currency and operator and decimal)
    showMoneyTotal(currency, amount) {
        const value = this.formatNumber((amount * this.props.Data.Currency.rate).toFixed(2));
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
    };
    shouldComponentUpdate(nextProps, nextState) {
        // rotate the quantity button when quantity change (add to cart, update, delete)
        if (this.props.Data.Cart.length !== nextProps.Data.Cart.length ) {
            const currentAmount = document.querySelector(".current-amount");
            currentAmount.style.transition = "1s";
            const currentRotate = currentAmount.style.transform;
            if (currentRotate === "rotate(0deg)"){
                currentAmount.style.transform = "rotate(360deg)";
                currentAmount.style.transition = "1s";
            }
            if (currentRotate === "rotate(360deg)"){
                currentAmount.style.transform = "rotate(0deg)";
                currentAmount.style.transition = "1s";
            }
        }
        // only re-render if cart length change or currency change
        if (this.props.Data.Cart.length !== nextProps.Data.Cart.length || 
            this.props.Data.Currency.currency !== nextProps.Data.Currency.currency ||
            this.state.cart_top_up != nextState.cart_top_up
            ) {return true} else {return false}
    };
    render(){
        const {Cart, Products, Currency} = this.props.Data;
        const {dispatch} = this.props;
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
        return (
            <div className="cart">
                <div className="cart-amount">
                    {/* cart icon */}
                    <svg 
                    onClick = {()=>this.toggleCartTopUp()}
                    className ="icon cart-icon" height="512pt" viewBox="-3 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m494.929688 97.148438c-9.492188-10.84375-23.023438-16.816407-38.097657-16.816407h-364.429687l-3.667969-27.5c-3.953125-29.625-24.578125-52.832031-46.957031-52.832031h-26.777344c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h26.777344c4.8125 0 15.003906 10.175781 17.21875 26.796875l42.9375 322.039063c1.890625 14.195312 9.183594 27.484374 20.535156 37.421874 8.417969 7.371094 18.367188 12.273438 28.789062 14.324219-4.246093 7.808594-6.660156 16.753907-6.660156 26.25 0 30.421875 24.75 55.167969 55.167969 55.167969s55.167969-24.746094 55.167969-55.167969c0-9.0625-2.210938-17.613281-6.101563-25.164062h78.601563c-3.890625 7.550781-6.101563 16.101562-6.101563 25.164062 0 30.421875 24.75 55.167969 55.167969 55.167969s55.167969-24.746094 55.167969-55.167969c0-9.0625-2.210938-17.613281-6.101563-25.164062h39.300782c8.28125 0 15-6.71875 15-15 0-8.285157-6.71875-15-15-15h-302.589844c-14.65625 0-28.671875-12.273438-30.609375-26.800781l-3.136719-23.535157h116.746094c.003906 0 .007812.003907.011718.003907.003907 0 .007813-.003907.015626-.003907h96.367187c.003906 0 .007813.003907.015625.003907.003906 0 .003906-.003907.007812-.003907h83.003907c14.320312 0 28.457031-5.472656 39.808593-15.40625 11.351563-9.9375 18.644532-23.230469 20.535157-37.425781l21.515625-161.367188c1.992187-14.941406-2.136719-29.140624-11.628906-39.984374zm-269.996094 359.683593c0 13.878907-11.289063 25.167969-25.167969 25.167969-13.875 0-25.167969-11.289062-25.167969-25.167969 0-13.875 11.292969-25.164062 25.167969-25.164062 13.878906 0 25.167969 11.289062 25.167969 25.164062zm176.734375 0c0 13.878907-11.289063 25.167969-25.167969 25.167969s-25.167969-11.289062-25.167969-25.167969c0-13.875 11.289063-25.164062 25.167969-25.164062s25.167969 11.289062 25.167969 25.164062zm70.6875-339.921875c3.714843 4.242188 5.300781 10.011719 4.464843 16.253906l-9.019531 67.667969h-102.0625l6.03125-90.5h85.0625c6.300781 0 11.8125 2.335938 15.523438 6.578125zm-213.019531 204.421875-6.035157-90.5h80.371094l-6.035156 90.5zm-8.035157-120.5-6.03125-90.5h96.433594l-6.03125 90.5zm-36.097656-90.5 6.03125 90.5h-112.769531l-12.066406-90.5zm-102.738281 120.5h110.769531l6.035156 90.5h-104.738281zm312.234375 90.5h-66.996094l6.035156-90.5h100.0625l-8.492187 63.703125c-1.9375 14.527344-15.957032 26.796875-30.609375 26.796875zm0 0"/></svg>
                    {/* cart quantity (the red box) */}
                    <span
                        className="current-amount"
                        style={{"transform": "rotate(0deg)"}}
                        onClick = {()=>this.toggleCartTopUp()}
                    >{Cart.length}</span>
                    {/* cart top up when hove on icon cart or the red box */}
                    {
                        this.state.cart_top_up && (
                            <div className="cart-top-up">
                        {
                            (Cart.length === 0) ? (
                                // empty top up if no product added to cart
                                <div className="empty-cart">
                                    <div className="content">
                                        <p className="announce">It appears that your cart is currently empty!</p>
                                        <p>Please continue shopping...</p>
                                    </div>
                                </div>
                            ) : (
                                // detail top up if product(s) added to cart
                                <div className="added-cart">
                                    <div className="title">Recently added {Cart.length} items(s)</div>
                                    <div className="row navigate">
                                        {/* button view cart */}
                                        <div className="col" onClick = {()=>this.toggleCartTopUp()}>
                                            <div className="content view">
                                                <NavLink
                                                    to = "/shopping-cart"
                                                    exact = {true}
                                                >
                                                    View Cart
                                                </NavLink>
                                            </div>
                                        </div>
                                        {/* button check out cart */}
                                        <div className="col">
                                            <div className="content check-out">
                                                <NavLink
                                                    to = "/check-out"
                                                    exact = {true}
                                                    onClick = {()=>{this.toggleCartTopUp(); dispatch({type: "BUY_WHOLE_CART"})}}
                                                >
                                                    Checkout
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        splicedProductsList.map((item, index) => {
                                            return (
                                                // display each product in shopping cart top up
                                                <div className="added-product hide-1023" key={index}>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            {/* main image */}
                                                            <div className="col-2 img">
                                                                <img
                                                                    src = {item.main__image.default} alt="added product"
                                                                />
                                                            </div>
                                                            {/* name and link to product detail */}
                                                            <div className="col-7 title">
                                                                <NavLink
                                                                    to = {`/product/${urlSlug(item.name)}`}
                                                                    exact = {true}
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            </div>
                                                            {/* delete icon and quantity and price */}
                                                            <div className="col-3 amount">
                                                                <div className="cal">
                                                                    {/* delete icon */}
                                                                    <FontAwesomeIcon
                                                                        icon = {faTrashAlt}
                                                                        className="icon"
                                                                        onClick = {()=>{dispatch({type: "REMOVE", id: item.id})}}
                                                                    />
                                                                    <div className="money">
                                                                        {/* quanity */}
                                                                        <span className="unit">{this.countProduct(item.id)} x</span>
                                                                        {/* price */}
                                                                        <span className="price">{this.showMoney(Currency.currency, 1, item)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* show total amount of shopping cart */}
                                    <div className="total hide-1023">
                                        <span>Total: {this.showMoneyTotal(Currency.currency, totalAmount) }</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                        )
                    }
                </div>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ShoppingCart)