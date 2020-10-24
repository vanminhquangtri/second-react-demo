// direct child of component Product Detail
import React from 'react';
import {connect} from "react-redux"
import AlsoBoughtModal from './AlsoBoughtModal';

const AlsoBought = (props) => {
    const {Product} = props;
    const {Products} = props.Data;
    // find other product in the same category
    const sameCatProducts = []
    Products.forEach((product) => {
        if (product.category === Product.category && product.id !== Product.id) {
            sameCatProducts.push(product);
        }
    })
    return (
        <div className="row also-bought">
            <div className="container-fluid">
                <div className="row title-row">
                    <div className="col">
                        <h4 className="title">Customers who bought this item also bought</h4>
                    </div>
                </div>
                <div className="row other-products product-row">
                    {
                        sameCatProducts.map((product, index) => {
                            if (index < 6) {
                                return (
                                    <AlsoBoughtModal 
                                        Products = {product}
                                        key = {index}
                                    ></AlsoBoughtModal>
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
export default connect(mapStateToProps)(AlsoBought)