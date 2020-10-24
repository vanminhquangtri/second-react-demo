// direct child of ProductDetail Component
import React, {useState, useEffect} from 'react';
import DetailDescription from './DetailDescription';
import DetailShippingPayment from './DetailShippingPayment';
import DetailSize from './DetailSize';
import DetailRefund from './DetailRefund';

const TermDetail = (props) => {
    const [state, setState] = useState({
        detail_status: "des",
    })
    const {Product} = props;
    const changeDetailStatus = (value) => {
        setState(() => {
            return {
                detail_status: value
            }
        })
    }
    const {detail_status} = state;
    useEffect(() => {
        // change background color of click title
        const titleButtons = document.querySelectorAll(".row.title .col .content");
        for (let i = 0; i < titleButtons.length; i++) {
            titleButtons[i].addEventListener("click", () => {
                titleButtons.forEach((btn) => {
                    btn.style.background = null;
                })
                titleButtons[i].style.background = "rgb(207, 207, 207)";
            })
        }
    })
    return (
        <div className="row term">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <div className="content des"
                            onClick={()=>{changeDetailStatus("des")}}
                        >
                            <span>Product Description</span>
                        </div>
                        <div className="content size"
                            onClick={()=>{changeDetailStatus("size")}}
                        >
                            <span>Size Chart</span>
                        </div>
                        <div className="content shipping-payment"
                            onClick={()=>{changeDetailStatus("shipping-payment")}}
                        >
                            <span>Shipping and Payment</span>
                        </div>
                        <div className="content refund"
                            onClick={()=>{changeDetailStatus("refund")}}
                        >
                            <span>Refund Policy</span>
                        </div>
                    </div>
                </div>
                <div className="row detail">
                    {
                        ((detail_status === "des") && <DetailDescription Product = {Product}></DetailDescription>) ||
                        ((detail_status === "size") && <DetailSize Product = {Product}></DetailSize>) ||
                        ((detail_status === "shipping-payment") && <DetailShippingPayment></DetailShippingPayment>) ||
                        ((detail_status === "refund") && <DetailRefund></DetailRefund>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TermDetail;