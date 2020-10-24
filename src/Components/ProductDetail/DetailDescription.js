// direct child of TermDetail
import React from 'react';

const DetailDescription = (props) => {
    const {Product} = props;
    return (
        <div className="col des">
            <div className="content">
                <h5 className="title">{Product.name}</h5>
                <div className="description">{Product.description}</div>
            </div>
        </div>
    );
};

export default DetailDescription;