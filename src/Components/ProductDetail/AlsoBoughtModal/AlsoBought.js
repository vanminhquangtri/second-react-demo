// direct child of component Product Detail
import React from 'react';
import {conect, connect} from "react-redux"

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
        <div className="also-bought">
            <div className="container">
                <div className="row titile">
                    <div className="col">
                        <h4>Customers who bought this item also bought</h4>
                    </div>
                </div>
                <div className="row other-products">
                    {/* will render 6 of product same category */}
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