// direct child of component Product Detail, , show 6 product different category with current product
import React from 'react';
import {connect} from "react-redux"
import AlsoLikeModal from './AlsoLikeModal';

const AlsoLike = (props) => {
    const {Product} = props;
    const {Products} = props.Data;
    // find other product not same category
    const otherCatProducts = []
    Products.forEach((product) => {
        if (product.category !== Product.category) {
            otherCatProducts.push(product);
        }
    })
    return (
        <div className="row also-like also">
            <div className="container-fluid">
                {/* big title at the top */}
                <div className="row title-row">
                    <div className="col">
                        <h4 className="title">You may also like</h4>
                    </div>
                </div>
                <div className="row other-products product-row">
                    {/* show 6 product, each product is a col-2 div */}
                    {
                        otherCatProducts.map((product, index) => {
                            if (index < 6) {
                                return (
                                    <AlsoLikeModal 
                                        Products = {product}
                                        key = {index}
                                    ></AlsoLikeModal>
                                )
                            }
                            return "";
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(AlsoLike)