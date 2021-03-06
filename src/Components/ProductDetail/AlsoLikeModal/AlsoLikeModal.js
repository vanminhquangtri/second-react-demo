/**@jsx jsx */
import {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {jsx, css} from '@emotion/core';
import {Modal, Button} from "react-bootstrap";
import {connect} from "react-redux";
import urlSlug from "url-slug";
import ModalDetail from '../../ProductModal/ModalDetail';

const AlsoLikeModal = (props) => {
    const {Products, dispatch} = props;
    const {Currency} = props.Data;
    // format thounds seperator
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const showPrice = (currency) => {
        const value = formatNumber((Products.price * Currency.rate).toFixed(2));
        switch (currency) {
            case "USD":
                return "$ " + value
            case "EUR":
                return "€ " + value

            case "GBP":
                return "£ " + value

            default:
                return "$ " + value
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-2">
            <div className="content">
                {/* main image */}
                <img
                    src = {Products.main__image.default}
                    alt = {Products.name}
                    className="product-img"
                />
                {/* link containing name and price */}
                <NavLink
                    to = {`/product/${urlSlug(Products.name)}`}
                    exact = {true}
                    onClick = {()=>{window.scrollTo(0, 0); dispatch({type: "BUY_PRODUCT", product: Products})}}
                >
                    <div className="info">
                        <div className="name">{Products.name}</div>
                        <div className="price">{showPrice(Currency.currency)}</div>
                    </div>
                </NavLink>
                {/* overlay appear when hover on product */}
                <div className="overlay">
                    {/* background image */}
                    <div 
                        className="blur"
                        css = {css`
                            background-image: url(${Products.main__image.default})
                        `}
                    >
                    </div>
                    {/* container button add to cart and zoom out */}
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
                            {/* button zoom out, will top op the modal detail */}
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
                                            <div className="also-like">
                                                <ModalDetail
                                                    Products = {Products}
                                                    navSlector = {"also-like"}
                                                ></ModalDetail>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* sales off, only appear if sale property of product is not false */}
                {
                    Products.sale__off && (
                        <div className="sale-off">
                            <span className="sale-rate">
                                SALE <br/>
                                {Products.sale__off}
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}
export default connect(mapStateToProps)(AlsoLikeModal)