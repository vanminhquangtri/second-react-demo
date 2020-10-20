import React from 'react';
import BrandSlide from './Children/BrandSlide/BrandSlide';
import CollectionSum from './Children/CollectionSum/CollectionSum';
import TopSlide from './Children/TopSlide/TopSlide';

const Home = (props) => {
    return (
        <section className="home">
            <TopSlide></TopSlide>
            <BrandSlide></BrandSlide>
            <CollectionSum></CollectionSum>
        </section>
    )
};

export default Home;