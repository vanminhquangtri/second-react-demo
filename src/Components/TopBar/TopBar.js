import React, {useEffect} from 'react';
import logo from "../../Assets/images/section-top-bar/logo.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const TopBar = (props) => {
    const {dispatch} = props;
    const {Currency} = props.Data;
    const showCurrency = (currency) => {
        switch (currency) {
            case "USD":
                return (<span>$ <strong>{currency}</strong></span>)

            case "EUR":
                return (<span>€ <strong>{currency}</strong></span>)

            case "GBP":
                return (<span>£ <strong>{currency}</strong></span>)

            default:
                return (<span>$ <strong>{currency}</strong></span>)
        }
    }
    useEffect(() => {
        // accordion animation of currency list
        const currency = document.querySelector(".currency");
        const currencyList = document.querySelector(".currency-list");
        currency.addEventListener("click", () => {
            if (currencyList.style.maxHeight) {
                currencyList.style.maxHeight = null;
                currencyList.style.borderBottom = null;
            } else {
                currencyList.style.maxHeight = currencyList.scrollHeight + "px";
                currencyList.style.borderBottom = "1px solid black";
            }
        })
    }, [])
    return (
        <section className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="logo">
                            <img src = {logo} alt="logo"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="search-form">
                            <form>
                                <input type="search" placeholder="Search for..."></input>
                                <button type="submit"><FontAwesomeIcon icon = {faSearch}/></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="account-currency">
                            <NavLink to="/acount/login">Login</NavLink>
                            <NavLink to="/acount/register">Register</NavLink>
                            <span className="currency" style = {{"paddingRight": 0}}>
                                {showCurrency(Currency.currency)} &nbsp; 
                                <FontAwesomeIcon icon = {faChevronDown} className="icon" style = {{"margin": 0}}/>
                            </span>
                            <div className="currency-list">
                                <ul>
                                    <li onClick = {() => {dispatch({type: "USD"})}}>
                                        $ USD
                                    </li>
                                    <li onClick = {() => {dispatch({type: "EUR"})}}>
                                        € EUR
                                    </li>
                                    <li onClick = {() => {dispatch({type: "GBP"})}}>
                                        $ GBP
                                    </li>
                                </ul>
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
export default connect(mapStateToProps)(TopBar)
