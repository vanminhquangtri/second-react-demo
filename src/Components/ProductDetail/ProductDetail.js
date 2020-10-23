import React from 'react';

const ProductDetail = (props) => {
    console.log(props.match.params.nameSlug);
    return (
        <section className="product-detail">
            Product Detail Page
        </section>
    );
};

export default ProductDetail;