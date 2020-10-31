/**@jsx jsx */
import {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {jsx, css} from '@emotion/core';
import {Modal, Button} from "react-bootstrap";
import ModalDetail from './ModalDetail';
import {connect} from "react-redux";
import urlSlug from "url-slug";
/* this component will dispatch the displayed product to BoughtProduct Store when click on name of product */
const ProductModal = (props) => {
    const {Products, dispatch, navSlector} = props;
    const {Currency} = props.Data;
    const showPrice = (currency) => {
        const value = (Products.price * Currency.rate).toFixed(2);
        switch (currency) {
            case "USD":
                return "$ " + value;
            case "EUR":
                return "€ " + value;

            case "GBP":
                return "£ " + value;

            default:
                return "$ " + value;
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        // each product is a col-3 div
        <div className="col-3">
            {/* wrap all content */}
            <div className="content">
                {/* main image */}
                <img
                    src = {Products.main__image.default}
                    alt = {Products.name}
                    className="product-img"
                />
                {/* product name and price */}
                <NavLink
                    to = {`/product/${urlSlug(Products.name)}`}
                    exact = {true}
                    onClick = {()=>{dispatch({type: "BUY_PRODUCT", product: Products})}}
                >
                    <div className="info">
                        <div className="name">{Products.name}</div>
                        <div className="price">{showPrice(Currency.currency)}</div>
                    </div>
                </NavLink>
                {/* overlay appear when hover product */}
                <div className="overlay">
                    {/* background image */}
                    <div 
                        className="blur"
                        css = {css`
                            background-image: url(${Products.main__image.default})
                        `}
                    >
                    </div>
                    {/* container of icon add to cart and zoom */}
                    <div className="cart-zoom">
                        <div className="row">
                            {/* button add to cart */}
                            <div 
                                className="col-6 add-to-cart" 
                                title="add to shopping cart"
                                onClick = {()=>{dispatch({type: "ADD", id: Products.id, quantity: 1})}}
                            >
                                <div className="icon-container">
                                    <FontAwesomeIcon 
                                        icon = {faShoppingCart} 
                                        className="icon"
                                    />
                                </div>
                            </div>
                            {/* button zoom out, click this will show the modal */}
                            <div className="col-6 zoom out">
                                <div className="icon-container">
                                    <Button variant="primary" onClick={()=>handleShow()}  title="see more details">
                                        <FontAwesomeIcon 
                                            icon = {faSearchPlus} 
                                            className="icon"
                                        />
                                    </Button>
                                    {/* top - up modal */}
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{Products.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className = {navSlector}>
                                                <ModalDetail
                                                    Products = {Products}
                                                    navSlector = {`${navSlector}`}
                                                ></ModalDetail>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps)(ProductModal)