/**@jsx jsx */
import {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {jsx, css} from '@emotion/core';
import {Modal, Button} from "react-bootstrap";
import {connect} from "react-redux";

const ProductModal = (props) => {
    const {Products} = props;
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
                    to = "/"
                    exact = {true}
                >
                    <div className="info">
                        <div className="name">{Products.name}</div>
                        <div className="price">${Products.price}</div>
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
                            <div className="col-6" title="add to shopping cart">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon = {faShoppingCart} className="icon"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="icon-container">
                                    <Button variant="primary" onClick={()=>handleShow()}  title="see more details">
                                        <FontAwesomeIcon icon = {faSearchPlus} className="icon"/>
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Woohoo, you're reading this text in a modal!
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={()=>handleClose()}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={()=>handleClose()}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
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

export default ProductModal;