import React from 'react';
import {connect} from "react-redux";
import ProductModal from '../ProductModal/ProductModal';

const HotCollection = (props) => {
    const {Products} = props.Data;
    return (
        <section className="best-sell hot-collection">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">HOT COLLECTION</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.category === "Hot") {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal hot-collection-modal"
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
export default connect(mapStateToProps)(HotCollection)