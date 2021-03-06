import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProductModal from '../ProductModal/ProductModal';

const LatestCollection = (props) => {
    const {Products} = props.Data;
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="best-sell latest-collection">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">LATEST COLLECTION</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.category === "Latest") {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal latest-collection-modal"
                                        navSlector = {"latest-collection"}
                                    >
                                    </ProductModal>
                                )
                            }
                            return "";
                        })
                    }
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
export default connect(mapStateToProps)(LatestCollection)