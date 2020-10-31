import React from 'react';
import {NavLink} from "react-router-dom";
import payment from "../../Assets/images/section-footer/payment.webp";
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    {/* About */}
                    <div className="col-3">
                        <div className="title">About</div>
                        <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta aperiam et laboriosam nulla.
                        </div>
                        <div className="payment">
                            <img src = {payment} alt="payment cards"/>
                        </div>
                        <div className="copy-right">© Themetidy. All Rights Reserved</div>
                    </div>
                    {/* The Service */}
                    <div className="col-2">
                        <div className="title">The Service</div>
                        <div className="links">
                            <NavLink
                                to = "/all-collection"
                            >Faqs</NavLink>
                            <NavLink
                                to = "/all-collection"
                            >Search</NavLink>
                            <NavLink
                                to = "/all-collection"
                            >About Us</NavLink>
                            <NavLink
                                to = "/all-collection"
                            >Contact Us</NavLink>
                            <NavLink
                                to = "/all-collection"
                            >Privacy Policy</NavLink>
                        </div>
                    </div>
                    {/* Information */}
                    <div className="col-2">
                        <div className="title">Information</div>
                        <div className="links">
                            <NavLink
                                to = "/all-collection"
                            >
                                Return Info
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Delivery Info
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Shopping Info
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Size Cart Info
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                About Product
                            </NavLink>
                        </div>
                    </div>
                    {/* Gallery */}
                    <div className="col-2">
                        <div className="title">Gallery</div>
                        <div className="links">
                            <NavLink
                                to = "/all-collection"
                            >
                                Customer Service
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Terms &#38; condition
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Shipping &#38; Refund
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Returns
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                            >
                                Delivery Information
                            </NavLink>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className="col-3">
                        <div className="title">Newsletter</div>
                        <form className="subscribe-form">
                            <input type="text" placeholder="Email address"/>
                            <button type="submit">
                                <FontAwesomeIcon icon = {faShareSquare}/>
                            </button>
                        </form>
                        {/* Social Links */}
                        <div className="title social">Social Links</div>
                        <div className="social-links">
                            <NavLink
                                to = "/all-collection"
                                title="Facebook"
                            >
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon"/>
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                                title="Twitter"
                            >
                                <FontAwesomeIcon icon={['fab', 'twitter']} className="icon"/>
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                                title="Google-plus"
                            >
                                <FontAwesomeIcon icon={['fab', 'google-plus-g']} className="icon"/>
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                                title="Instagram"
                            >
                                <FontAwesomeIcon icon={['fab', 'instagram']} className="icon"/>
                            </NavLink>
                            <NavLink
                                to = "/all-collection"
                                title="LinkedIn"
                            >
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;