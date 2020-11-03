import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faHome, faTimesCircle, faBars} from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const TopNav = () => {
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
        // toogle submenu for max-width 1249px 
        const openSubMenuBtn = document.querySelector(".sub-menu-btn.open");
        const closeSubMenuBtn = document.querySelector(".sub-menu-btn.close");
        const subMenu = document.querySelector(".nav > ul.sub-menu");
            // show submenu and close icon when click open
            openSubMenuBtn.addEventListener("click", () => {
                closeSubMenuBtn.style.display = "block";
                closeSubMenuBtn.style.color = "white";
                subMenu.style.display = "block";
            })
            // hide submenu and close icon when click close
            closeSubMenuBtn.addEventListener("click", () => {
                subMenu.style.display = "none";
                closeSubMenuBtn.style.display = "none";
            })
    },[])
    return (
        <section className="top-nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {/* nav: home icon, link */}
                        <div className="nav">
                            {/* this sub menu no display on default, only appear when max-width 1249px */}
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
                                <li className="show-767" style={{display: "none"}}>
                                    <NavLink to = "/contact" exact = {true} activeClassName="active">Contact Us</NavLink>
                                </li>
                                <li className="show-767" style={{display: "none"}}>
                                    <NavLink to = "/about" exact = {true} activeClassName="active">About Us</NavLink>
                                </li>
                            </ul>
                            {/* main menu */}
                            <ul>
                                <li className="home"> {/* home icon */}
                                    <NavLink to = "/" exact = {true} activeClassName="active">
                                        <FontAwesomeIcon icon = {faHome} className="icon"/>
                                    </NavLink>
                                </li>
                                <li className="sub-menu-btn open show-1249" style={{display: "none"}}>
                                    <FontAwesomeIcon icon = {faBars} className="icon"/>
                                </li>
                                <li className="sub-menu-btn close" style={{display: "none"}}> {/* only appear when click open button */}
                                    <FontAwesomeIcon icon = {faTimesCircle} className="icon"/>
                                </li>
                                <li className="hide-1249">
                                    <NavLink to = "/all-collection" exact = {true} activeClassName="active">
                                        SHOP
                                        <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                                    </NavLink>
                                    {/* this sub menu only appear when max-width > 1249px */}
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
                                        <li className="show-767" style={{display: "none"}}>
                                            <NavLink to = "/contact" exact = {true} activeClassName="active">Contact Us</NavLink>
                                        </li>
                                        <li className="show-767" style={{display: "none"}}>
                                            <NavLink to = "/about" exact = {true} activeClassName="active">About Us</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* this will be hiden for max-width 1249px */}
                                <li className="hide-1249">
                                    <NavLink to = "/latest-collection" exact = {true} activeClassName="active">LATEST COLLECTION</NavLink>
                                </li>
                                {/* this will be hiden for max-width 1249px */}
                                <li className="hide-1249">
                                    <NavLink to = "/featured-collection" exact = {true} activeClassName="active">FEATURED COLLECTION</NavLink>
                                </li>
                                {/* this will be hiden for max-width 1249px */}
                                <li className="hide-1249">
                                    <NavLink to = "/modern-collection" exact = {true} activeClassName="active">MODERN COLLECTION</NavLink>
                                </li>
                                {/* this will be hiden for max-width 1249px */}
                                <li className="hide-1249">
                                    <NavLink to = "/minimal-collection" exact = {true} activeClassName="active">MINIMAL COLLECTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/order" exact = {true} activeClassName="active">YOUR ORDER</NavLink>
                                </li>
                                {/* this will be hiden for max-width 767px */}
                                <li className="hide-767">
                                    <NavLink to = "/contact" exact = {true} activeClassName="active">CONTACT US</NavLink>
                                </li>
                                {/* this will be hiden for max-width 767px */}
                                <li className="hide-767">
                                    <NavLink to = "/about" exact = {true} activeClassName="active">ABOUT US</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* shopping cart */}
                        <ShoppingCart></ShoppingCart>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TopNav