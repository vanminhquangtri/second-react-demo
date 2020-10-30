// direct child of TermDetail
import React from 'react';

const DetailSize = (props) => {
    return (
        <div className="col size">
            <div className="content">
                <img src = {require("../../Assets/images/section-product-detail/size-chart_2_1024x1024.webp").default}
                    alt="size"
                />
            </div>
        </div>
    );
};

export default DetailSize;