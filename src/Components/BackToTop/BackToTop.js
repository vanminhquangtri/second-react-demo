import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../GeneralModules/GeneralModules";

const BackToTop = () => {
    useEffect(() => {
        const backToTopBtn = document.querySelector(".back-top-btn");
        window.addEventListener("scroll", (ev) => {
            const y = window.scrollY;
            if (y > 0){
                backToTopBtn.style.opacity = 1;
            } else {
                backToTopBtn.style.opacity = 0;
            }
        })
    })
    return (
        <div className="back-top-btn" onClick = {()=>{ScrollToTop(0, 300)}}>
            <FontAwesomeIcon 
                icon = {faChevronUp} 
                className="icon"
            />
        </div>
    );
};

export default BackToTop;