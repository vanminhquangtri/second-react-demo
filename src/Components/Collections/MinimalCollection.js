import React from 'react';
import {connect} from "react-redux";
import ProductModal from '../Home/Children/BestSell/ProductModal';

const MinimalCollection = (props) => {
    const {Products} = props.Data;
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