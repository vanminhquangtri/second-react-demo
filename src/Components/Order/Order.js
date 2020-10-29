// direct child of ShoppingCartDetail, render each product in shopping cart
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import urlSlug from "url-slug";

const ShoppingCartProduct = (props) => {
    const {Orders} = props.Data;
    const [state, setState] = useState({
        stage: "verify",
        order_number: "",
        email: ""
    })
    const {stage} = state;
    // update state of stage (verify, failed, success) when press "view order"
    const updateState = (ev) => {
        ev.preventDefault();
        if (stage === "verify"){
            setState((prevState) => {
                return {
                    ...prevState,
                    stage: "failed"
                }
            })
        }
        if (stage === "failed"){
            setState((prevState) => {
                return {
                    ...prevState,
                    stage: "verify"
                }
            })
        }
    }
    // update state email and order number when fill form
    const updateEmailAndOrderNumber = (ev, field) => {
        const value = ev.target.value;
        const currentState = {...state};
        currentState[field] = value;
        setState(() => {
            return currentState
        })
    }
    console.log(Orders);
    return (
        <section className="order">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <h1>Welcome to Order Management Portal</h1>
                    </div>
                </div>
                {
                    (stage === "verify" || stage === "failed") && (
                        <div className="row order-verify">
                            <div className="col">
                                <h4>Please fill all information below</h4>
                                <form onSubmit = {(ev)=>{updateState(ev)}}>
                                    <label className="label">Order number</label>
                                    <input required className="field" type="text" placeholder="Your order number, for example: ORDER-1234567" onChange = {(ev)=>{updateEmailAndOrderNumber(ev, "order_number")}}/><br/>
                                    <label className="label">Emaill address</label>
                                    <input required className="field" type="email" placeholder="Email that was used to make order" onChange = {(ev)=>{updateEmailAndOrderNumber(ev, "email")}}/><br/>
                                    <input type="submit" value="View Order"/>
                                </form>
                            </div>
                        </div>
                    )
                }
                {
                    stage === "failed" && (
                        <div className="row announcement">
                        <div className="col">
                            <span>We are sorry, either order number or email address is incorrect. Please fill again then press "View Order"</span>
                        </div>
                    </div>
                    )
                }
                
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ShoppingCartProduct)
