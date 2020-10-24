// direct child of ProductDetail Component
import React, {useState} from 'react';
import DetailDescription from './DetailDescription';
import DetailSize from './DetailSize';

const TermDetail = (props) => {
    const [state, setState] = useState({
        detail_status: "des",
    })
    const changeDetailStatus = (value) => {
        setState(() => {
            return {
                detail_status: value
            }
        })
    }
    const {detail_status} = state;
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
                        <div className="content shipping-payment">
                            <span>Shipping and Payment</span>
                        </div>
                        <div className="content refund">
                            <span>Refund Policy</span>
                        </div>
                    </div>
                </div>
                <div className="row detail">
                    {
                        (detail_status === "des") && <DetailDescription></DetailDescription> ||
                        (detail_status === "size") && <DetailSize></DetailSize>
                    }
                </div>
            </div>
        </div>
    );
};

export default TermDetail;