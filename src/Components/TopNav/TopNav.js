import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faHome} from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const TopNav = (props) => {
    useEffect(() => {
        // fix top-nav when scrollY more than height of top-nav
        const topNav = document.querySelector(".top-nav");        
        const topNavPos = topNav.getBoundingClientRect().y;
        const topNavHeight = topNav.getBoundingClientRect().height;
        window.addEventListener("scroll", (ev) => {
            const nextEl = topNav.nextElementSibling; // define inside event to avoid re-render change the next element
            const y = window.scrollY;
            if (y >= topNavPos + 10){
                // 10 is padding=top of top-nav (10px)
                topNav.style.position = "fixed";
                topNav.style.top = "0";
                topNav.style.right = "0";
                topNav.style.left = "0";
                topNav.style.zIndex = 100;
                nextEl.style.marginTop = topNavHeight + "px";
            } else {
                topNav.style.position = "relative";
                topNav.style.top = "unset";
                topNav.style.right = "unset";
                topNav.style.left = "unset";
                nextEl.style.marginTop = "unset"
            }
        })
    },[])
    return (
        <section className="top-nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="nav">
                            <ul>
                                <li className="home">
                                    <NavLink to = "/" exact = {true} activeClassName="active">
                                        <FontAwesomeIcon icon = {faHome} className="icon"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/all-collection" exact = {true} activeClassName="active">
                                        SHOP
                                        <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                                    </NavLink>
                                    <ul className="sub-menu">
                                        <li>
                                            <NavLink to="/featured-collection" exact={true} activeClassName="active">Feature Collection</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/latest-collection" exact={true} activeClassName="active">Latest Collection</NavLink>
                                        </li>
                                        <li>
                                        <   NavLink to="/hot-collection" exact={true} activeClassName="active">Hot Collection</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/minimal-collection" exact={true} activeClassName="active">Minimal Collection</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/modern-collection" exact={true} activeClassName="active">Modern Collection</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/summer-collection" exact={true} activeClassName="active">Summer Collection</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to = "/latest-collection" exact = {true} activeClassName="active">LATEST COLLECTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/featured-collection" exact = {true} activeClassName="active">FEATURED COLLECTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/modern-collection" exact = {true} activeClassName="active">MODERN COLLECTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/minimal-collection" exact = {true} activeClassName="active">MINIMAL COLLECTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/blog" exact = {true} activeClassName="active">BLOG</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/contact" exact = {true} activeClassName="active">CONTACT</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/faqs" exact = {true} activeClassName="active">FAQS</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/about" exact = {true} activeClassName="active">ABOUT US</NavLink>
                                </li>
                            </ul>
                        </div>
                        <ShoppingCart></ShoppingCart>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TopNav