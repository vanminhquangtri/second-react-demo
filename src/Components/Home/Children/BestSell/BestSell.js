import React from 'react';
import {connect} from "react-redux";
import ProductModal from './ProductModal';

const BestSell = (props) => {
    const {Products} = props;
    return (
        <section className="best-sell">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">BEST SELL OF WEEK</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.best__sell === true) {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal"
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
        Products: state
    }
}
export default connect(mapStateToProps)(BestSell)