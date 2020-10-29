import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProductModal from '../ProductModal/ProductModal';

const MinimalCollection = (props) => {
    const {Products} = props.Data;
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="best-sell minimal-collection">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">MINIMAL COLLECTION</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.category === "Minimal") {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal minimal-collection-modal"
                                        navSlector = {"minimal-collection"}
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
export default connect(mapStateToProps)(MinimalCollection)