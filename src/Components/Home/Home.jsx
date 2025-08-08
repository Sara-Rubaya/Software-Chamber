import React from 'react';
import Banner from '../Banner/Banner';
import CountDown from '../CountDown/CountDown';
import Card from '../Services/Card';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Companies from '../Companies/Companies';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CountDown></CountDown>
          <Card></Card>
          <WhyChooseUs></WhyChooseUs>
          <Companies></Companies>
        </div>
    );
};

export default Home;