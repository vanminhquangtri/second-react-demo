import React from 'react';
import {connect} from "react-redux";
import ProductModal from '../ProductModal/ProductModal';

const ModernCollection = (props) => {
    const {Products} = props.Data;
    return (
        <section className="best-sell modern-collection">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">MODERN COLLECTION</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.category === "Modern") {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal modern-collection-modal"
                                        navSlector = {"modern-collection"}
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
export default connect(mapStateToProps)(ModernCollection)