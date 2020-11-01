import React, {useEffect} from 'react';
import logo from "../../Assets/images/section-top-bar/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import DateTime from './DateTime';

const TopBar = (props) => {
    const {dispatch} = props;
    const {Currency} = props.Data;
    const showCurrency = (currency) => {
        switch (currency) {
            case "USD":
                return (<span className="currency-sign">$ <strong className="currency-sign">{currency}</strong></span>)

            case "EUR":
                return (<span className="currency-sign">€ <strong className="currency-sign">{currency}</strong></span>)

            case "GBP":
                return (<span className="currency-sign">£ <strong className="currency-sign">{currency}</strong></span>)

            default:
                return (<span className="currency-sign">$ <strong className="currency-sign">{currency}</strong></span>)
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
        // hide currency list if click outside
        document.addEventListener("click", (ev) => {
            const target = ev.target;
            const clickClassName = target.getAttribute("class");
            if ( (clickClassName === null) || (clickClassName !== null && clickClassName !== "currency-sign" && (!clickClassName.includes("currency-sign")
            ))){
                currencyList.style.maxHeight = null;
                currencyList.style.borderBottom = null;
            }
        })
    }, [])
    return (
        <section className="top-bar">
            <div className="container">
                <div className="row">
                    {/* logo */}
                    <div className="col-2 logo-container">
                        <NavLink
                            to="/"
                        >
                            <div className="logo">
                                <img src = {logo} alt="logo"/>
                            </div>
                        </NavLink>
                        
                    </div>
                    {/* clock */}
                    <DateTime></DateTime>
                    {/* latest collection */}
                    <div className="col-3 lastest">
                        <NavLink
                            to = "latest-collection"
                        >
                            <span>Our Latest Collections</span>
                            <img
                                alt="latest-collection"
                                src={require("../../Assets/images/section-top-bar/new.svg").default}
                            />
                        </NavLink>
                        
                    </div>
                    {/* currency */}
                    <div className="col-auto">
                        <div className="account-currency">
                            <NavLink to="/">Currency</NavLink>
                            <span className="currency" style = {{"paddingRight": 0}}>
                                {showCurrency(Currency.currency)} &nbsp; 
                                <FontAwesomeIcon icon = {faChevronDown} className="icon currency-sign" style = {{"margin": 0}}/>
                            </span>
                            <div className="currency-list">
                                <ul className="currency-sign">
                                    <li className="currency-sign" onClick = {() => {dispatch({type: "USD"})}}>
                                        $ USD
                                    </li>
                                    <li className="currency-sign" onClick = {() => {dispatch({type: "EUR"})}}>
                                        € EUR
                                    </li>
                                    <li className="currency-sign" onClick = {() => {dispatch({type: "GBP"})}}>
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
