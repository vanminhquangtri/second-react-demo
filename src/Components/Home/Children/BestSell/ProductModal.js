// direct child of BestSell Component
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

const ProductModal = (props) => {
    const {Products, dispatch} = props;
    const {Currency} = props.Data;
    const showPrice = (currency) => {
        switch (currency) {
            case "USD":
                return "$ " + Products.price.toFixed(2)
            case "EUR":
                return "€ " + (Products.price * 0.84).toFixed(2)

            case "GBP":
                return "£ " + (Products.price * 0.76).toFixed(2)

            default:
                return "$ " + Products.price.toFixed(2)
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-3">
            <div className="content">
                <img
                    src = {Products.main__image}
                    alt = {Products.name}
                    className="product-img"
                />
                <NavLink
                    to = {`/product/${urlSlug(Products.name)}`}
                    exact = {true}
                >
                    <div className="info">
                        <div className="name">{Products.name}</div>
                        <div className="price">{showPrice(Currency.currency)}</div>
                    </div>
                </NavLink>
                <div className="overlay">
                    <div 
                        className="blur"
                        css = {css`
                            background-image: url(${Products.main__image})
                        `}
                    >
                    </div>
                    <div className="cart-zoom">
                        <div className="row">
                            <div 
                                className="col-6 add-to-cart" 
                                title="add to shopping cart"
                                onClick = {()=>{dispatch({type: "ADD", id: Products.id, amount: 1})}}
                            >
                                <div className="icon-container">
                                    <FontAwesomeIcon 
                                        icon = {faShoppingCart} 
                                        className="icon"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="icon-container">
                                    <Button variant="primary" onClick={()=>handleShow()}  title="see more details">
                                        <FontAwesomeIcon 
                                            icon = {faSearchPlus} 
                                            className="icon"
                                        />
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{Products.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <ModalDetail
                                                Products = {Products}
                                            ></ModalDetail>
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