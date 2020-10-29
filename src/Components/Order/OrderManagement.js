// direct child of ShoppingCartDetail, render each product in shopping cart
import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import OrderDetail from './OrderDetail';

const OrderManagement = (props) => {
    const {Orders} = props.Data;
    const [state, setState] = useState({
        stage: "verify",
        order_number: "",
        email: ""
    })
    const {stage} = state;
    // update state email and order number and change state to verify when fill each input tag
    const updateEmailAndOrderNumber = (ev, field) => {
        const value = ev.target.value;
        const currentState = {...state};
        currentState[field] = value;
        currentState.stage = "verify"
        setState(() => {
            return currentState
        })
    }
    // check if input order-number is exist in Store when press "View Order"
    const findOrderInStore = (ev, orderNumber, passedEmail) => {
        ev.preventDefault();
        const result = Orders.some((order) => {
            return order.order_id === orderNumber && order.shipping.email === passedEmail
        });
        // if exist, change state to success
        if (result) {
            setState((prevState) => {
                return {
                    ...prevState,
                    stage: "success"
                }
            })
        } else {
            // if not exist, change state to failed
            setState((prevState) => {
                return {
                    ...prevState,
                    stage: "failed"
                }
            })
        }
    }
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="order-management">
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
                                <form onSubmit = {(ev)=>{findOrderInStore(ev, state.order_number, state.email)}}>
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
                {
                    stage === "success" && (
                        <OrderDetail
                            order_number = {state.order_number}
                        />
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
export default connect(mapStateToProps)(OrderManagement)
