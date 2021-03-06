import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ProductModal from '../ProductModal/ProductModal';

const FeaturedCollection = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    const {Products} = props.Data;
    return (
        <section className="best-sell featured-collection">
            <div className="container">
                <div className="row title-row">
                    <div className="col">
                        <span className="title">FEATURED COLLECTION</span>
                    </div>
                </div>
                <div className="row product-row">
                    {
                        Products.map((product, index) => {
                            if (product.category === "Featured") {
                                return (
                                    <ProductModal
                                        key={index}
                                        Products = {product}
                                        className="best-sell-modal featured-collection-modal"
                                        navSlector = {"featured-collection"}
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
export default connect(mapStateToProps)(FeaturedCollection)