// direct child of ProductModal Component
import React, {useEffect} from 'react';
import TinySlider from "tiny-slider-react";
const settings = {
    nav: true,
    controls: false,
    items: 1
}

const ModalDetail = (props) => {
    const {Products} = props;
    useEffect(() => {
        const navBtn = document.querySelectorAll(".tns-nav button");
        Products.slide__image.forEach((image, index) => {
            for (let i = 0; i < navBtn.length; i++){
                if (index === i){
                    navBtn[i].style.backgroundImage = `url(${image})`
                }
            }
        })
    })
    return (
        <div className="modal-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 image">
                        <TinySlider settings = {settings}>
                            {
                                Products.slide__image.map((image, index) => {
                                    return (
                                        <img
                                            src = {image}
                                            alt = {Products.name}
                                            key = {index}
                                        />
                                    )
                                })
                            }
                        </TinySlider>
                    </div>
                    <div className="col-6 info">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDetail;