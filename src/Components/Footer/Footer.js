import React from 'react';
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
                    <div className="col-2">
                        <div className="title">The Service</div>
                        <div className="links">
                            <a href="http://localhost:3000/">Faqs</a>
                            <a href="http://localhost:3000/">Search</a>
                            <a href="http://localhost:3000/">About Us</a>
                            <a href="http://localhost:3000/">Contact Us</a>
                            <a href="http://localhost:3000/">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="title">Information</div>
                        <div className="links">
                            <a href="http://localhost:3000/">Return Info</a>
                            <a href="http://localhost:3000/">Delivery Info</a>
                            <a href="http://localhost:3000/">Shopping Info</a>
                            <a href="http://localhost:3000/">Size Cart Info</a>
                            <a href="http://localhost:3000/">About Product</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="title">Gallery</div>
                        <div className="links">
                            <a href="http://localhost:3000/">Customer Service</a>
                            <a href="http://localhost:3000/">Terms &#38; condition</a>
                            <a href="http://localhost:3000/">Shipping &#38; Refund</a>
                            <a href="http://localhost:3000/">Returns</a>
                            <a href="http://localhost:3000/">Delivery Information</a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="title">Newsletter</div>
                        <form className="subscribe-form">
                            <input type="text" placeholder="Email address"/>
                            <button type="submit">
                                <FontAwesomeIcon icon = {faShareSquare}/>
                            </button>
                        </form>
                        <div className="title social">Social Links</div>
                        <div className="social-links">
                            <a href="http://localhost:3000/" title="Facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon"/>
                            </a>
                            <a href="http://localhost:3000/" title="Twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} className="icon"/>
                            </a>
                            <a href="http://localhost:3000/" title="Google-plus">
                                <FontAwesomeIcon icon={['fab', 'google-plus-g']} className="icon"/>
                            </a>
                            <a href="http://localhost:3000/" title="Instagram">
                                <FontAwesomeIcon icon={['fab', 'instagram']} className="icon"/>
                            </a>
                            <a href="http://localhost:3000/" title="LinkedIn">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;