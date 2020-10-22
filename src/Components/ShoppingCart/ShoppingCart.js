import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faTimes, faHome, faRemoveFormat, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";

const ShoppingCart = (props) => {
    const {dispatch} = props;
    const {Cart} = props.Data;
    console.log(Cart);
    return (
        <div>
            
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(ShoppingCart)