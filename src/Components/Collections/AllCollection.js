import React from 'react';
import {connect} from "react-redux";
import FeaturedCollection from './FeaturedCollection';
import HotCollection from './HotCollection';
import LatestCollection from './LatestCollection';
import MinimalCollection from './MinimalCollection';
import ModernCollection from './ModernCollection';
import SummerCollection from './SummerCollection';

const AllCollection = (props) => {
    return (
        <section className="best-sell all-collection">
            <LatestCollection/>
            <HotCollection/>
            <FeaturedCollection/>
            <ModernCollection/>
            <MinimalCollection/>
            <SummerCollection/>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(AllCollection)