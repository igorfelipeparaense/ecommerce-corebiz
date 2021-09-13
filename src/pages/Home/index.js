import React from 'react';
import Slider from 'components/Slider';
import Newsletter from 'components/Newsletter';
import BestSellers from 'components/BestSellers';

const Home = () => { 
    return <>
        <Slider />
        <BestSellers />
        <Newsletter />
    </>
}
export default Home;