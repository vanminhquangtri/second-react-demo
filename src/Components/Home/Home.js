import React, {useEffect} from 'react';
import BestSell from './Children/BestSell/BestSell';
import BrandSlide from './Children/BrandSlide/BrandSlide';
import CollectionParallax from './Children/CollectionParallax/CollectionParallax';
import CollectionSum from './Children/CollectionSum/CollectionSum';
import CustomerSay from './Children/CustomerSay/CustomerSay';
import Promotion from './Children/Promotion/Promotion';
import TopSlide from './Children/TopSlide/TopSlide';

const Home = (props) => {
    // move to top of page 
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <section className="home">
            <TopSlide></TopSlide>
            <BrandSlide></BrandSlide>
            <CollectionSum></CollectionSum>
            <BestSell></BestSell>
            <CollectionParallax></CollectionParallax>
            <CustomerSay></CustomerSay>
            <Promotion></Promotion>
        </section>
    )
};

export default Home;